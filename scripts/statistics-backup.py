import csv
import json
import os
import re
from html_parser import parse_html

EXAMPLES_GROUNDTRUTH_PATH = '../todomvc/examples.groundtruth/'
EXAMPLES_PATH = '../todomvc/examples/'

'''
The following function creates a list of dead functions and stores the object
within the _dead_functions.json file. If the file already exists, the file will
be overwritten.
'''
def create_dead_functions(subject):
  ALL_PATH   = EXAMPLES_GROUNDTRUTH_PATH + subject + '/_all_functions.json'
  ALIVE_PATH = EXAMPLES_GROUNDTRUTH_PATH + subject + '/_alive_functions.json'
  DEAD_PATH  = EXAMPLES_GROUNDTRUTH_PATH + subject + '/_dead_functions.json'

  with open(ALIVE_PATH, 'r') as f1:
    alive_data = json.load(f1)
  with open(ALL_PATH, 'r') as f2:
    all_data = json.load(f2)
    dead_data = all_data

  # Retrieve the number of alive and all functions from the ground truth
  num_alive_func = len(alive_data)
  num_all_func = len(all_data)

  for obj1 in alive_data:
    for obj2 in dead_data:
      # Break the inner loop if objects match and remove the object from all_data
      if obj1['bodyRange'] == obj2['bodyRange']:
        obj1['file'] = obj2['file']
        dead_data.remove(obj2)
        break

  # Create or delete dead data
  with open(DEAD_PATH, 'w') as f:
    json.dump(dead_data, f)

  # Modify alive data file paths to match the rest
  with open(ALIVE_PATH, 'w') as f:
    json.dump(alive_data, f)
 
  num_dead_func = len(dead_data)
 
  return num_all_func, num_alive_func, num_dead_func

'''
Check if the _dead_functions.json file already exists within the groundtruth
'''
def is_dead_functions_defined(subject):
  DEAD_FUNCTIONS_PATH = EXAMPLES_GROUNDTRUTH_PATH + subject + '/_dead_functions.json'
  return os.path.exists(DEAD_FUNCTIONS_PATH)

'''
Retrieve all of the UFF file names from the Vazquez tool
'''
def get_uff_filenames(subject):
  PROJ_PATH = EXAMPLES_PATH + subject
  js_paths = parse_html(PROJ_PATH)

  for i in range(len(js_paths)):
    js_paths[i] = js_paths[i].replace('instrumented', 'optimized')
  
  uffs = []
  for js_path in js_paths:
    path = EXAMPLES_PATH + subject + '/' + js_path

    with open(path, 'rt') as f:
      data = f.read()

    # find all instances of "uff/$_17716642501673218090391.js"
    pattern = r"eval\(\$dl\('uff/(.*?)'\)\)"
    regex = re.compile(pattern)
    uffs += regex.findall(data)
  return uffs

'''
Retrieve the number of total functions and total uffs from the Vazquez tool
'''
def get_subject_stats(subject):
  OUTPUT_PATH = './output/' + subject +'-output.json'
  with open(OUTPUT_PATH, 'r') as f:
    data = json.load(f)

  total_alive = data['total_functions'] - data['total_uff']
  return data['total_functions'], total_alive, data['total_uff']

'''
The following function compares the UFFS from the Vazquez tool and compares them 
with the ground truth. The function returns the number of true positives
for the dead_functions 
'''
def get_dead_functions_stats(subject, uffs):
  DEAD_FUNCTIONS_PATH = EXAMPLES_GROUNDTRUTH_PATH + subject + '/_dead_functions.json'

  with open(DEAD_FUNCTIONS_PATH, 'r') as f1:
    dead_data = json.load(f1)

  print('Getting Stats...')
  total_uffs = len(uffs)
  true_positives = 0
  false_positives = 0

  for obj in dead_data:
    # Range of the Function body 
    startRange = obj['bodyRange'][0]
    endRange = obj['bodyRange'][1]

    # Open the file assosiated with the object
    JS_FILE = EXAMPLES_PATH + subject + '/' + obj['file']
    with open(JS_FILE, 'r') as f2:
      js_data = f2.read()
    
    substring = js_data[startRange:endRange]
    # Vazuez tool sometimes uses different syntax, therefore we remove all whitespaces, {},()
    substring = re.sub(r'[\s;\(\)\{\}]', '', substring)
    
    for uff in uffs:
      UFF_PATH = './uff/' + uff
      with open(UFF_PATH, 'r') as f3:
        uff_data = f3.read()

      # split the function defined by the uff by lines
      lines = re.split(r'\n', uff_data)
      # remove "{ an }"
      lines = lines[1:-1]
      # Vazquez tool replaces 'this" with "$that", we are reverting this change here
      lines = [s.strip().replace('    $that','this') for s in lines]
      
      match_counter = 0
      nonmatch_counter = 0
      for line in lines:
        # Perform the same chances to the uffs to ensure the final result is the same as the ground truth
        line = re.sub(r'[\s;\(\)\{\}]', '', line)

        # if a line doesnt contain anything, ignore it
        if line == "":
          continue
        
        if line in substring:
          match_counter += 1
        else:
          nonmatch_counter += 1

      if match_counter >= nonmatch_counter:
        true_positives += 1
        uffs.remove(uff)
        break;
  

  false_positives = total_uffs - true_positives
  false_negatives = len(dead_data) - true_positives
  return true_positives, false_positives, false_negatives


'''
The following function will compare the results of the vazquez tool with the ground truth.
The output can be found within _statistics_.csv 
'''
def get_vazquez_stats():
  SUBJECTS = next(os.walk(EXAMPLES_GROUNDTRUTH_PATH))[1]

  with open('_statistics_.csv', 'a', newline='') as f:
    writer = csv.writer(f)

    CSV_HEADER = [['Subject','AllFunctions','ClaimedAllFunctions','DeadFunctions','ClaimedDeadFunctions','CreatedUFFS', 'TruePositives', 'FalsePositives', 'FalseNegatives','Precision','Recall','f_score']]
    writer.writerows(CSV_HEADER)

    #loop through all of the available subjects
    for subject in sorted(SUBJECTS):
      print('--- Current Subject: %s ---' % subject)

      # Create a _dead_functions.json file and retrieve basic ground truth data
      if not is_dead_functions_defined(subject):
        print('Creating Dead functions file for: ' + subject)
      else:
        print('Dead Functions file already exists (Overwriting): ' + subject)
      gt_all_func, gt_alive_func, gt_dead_func = create_dead_functions(subject)

      # Retrieve the filenames for all of the identified uffs for this subject
      uffs = get_uff_filenames(subject)
      created_uffs = len(uffs)

      # Retrieve the number of true dead functions
      true_positives, false_positives, false_negatives = get_dead_functions_stats(subject, uffs)

      # Retrieve the output stats from vazquez tool
      vq_all, vq_alive, vq_dead = get_subject_stats(subject)

      # Precision = TruePositives / (TruePositives + FalsePositives)
      precision = round(float(true_positives / (true_positives + false_positives)),3)

      # Recall = TruePositives / (TruePositives + FalseNegatives)
      recall = round(float(true_positives / (true_positives + false_negatives)),3)

      # F-score = (2 * Precision * Recall) / (Precision + Recall)
      f_score = round(float((2 * precision * recall) / (precision + recall)),3)

      # Write data to csv file
      data = [[subject,gt_all_func,vq_all,gt_dead_func,vq_dead,created_uffs,true_positives,false_positives, false_negatives,precision, recall, f_score]]
      writer.writerows(data)


if __name__ == '__main__':
  get_vazquez_stats()
  

