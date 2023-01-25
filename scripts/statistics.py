import csv
import json
import os
import re
import glob
import numpy as np
from html_parser import parse_html

EXAMPLES_GROUNDTRUTH_PATH = '../todomvc/examples.groundtruth/'
EXAMPLES_PATH = '../todomvc/examples/'

'''
The following function creates a list of dead functions and stores the object
within the _dead_functions.json file. If the file already exists, the file will
be overwritten.
'''
def create_gt_dead_functions(subject):
  print('Creating gt dead functions')
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

def get_all_dead_functions(all_path):
  print('Getting all dead functions')
  # Open the file which contains all of the functions
  with open(all_path, 'r') as f1:
    all_functions = json.load(f1)

  #Open the file which contains the dead functions
  dead_path = all_path.replace('__original','__dead')
  with open(dead_path, 'r') as f2:
    dead_functions = json.load(f2)

  new_dead_functions = []
  count = 0
  for dead_obj in dead_functions:
    new_dead_functions.append(dead_obj)
    for all_obj in all_functions:
      if dead_obj['bodyRange'][0] < all_obj['bodyRange'][0] and dead_obj['bodyRange'][1] > all_obj['bodyRange'][1] and dead_obj['file'] == all_obj['file']:
        new_dead_functions.append(all_obj)
        count += 1

  all_dead_path =  dead_path.replace('__dead','__all_dead')
  with open(all_dead_path, 'w') as f:
    json.dump(new_dead_functions, f)


def combine_json_files(files_list, new_file_path):
  print('Combining Files')
  if type(files_list) is not list or len(files_list) <= 1:
    print('Error: you need a list of files')

  main_file = files_list[0]
  with open(main_file, 'r') as f:
    main_data = json.load(f)

  for file_path in files_list[1:]:
    with open(file_path, 'r') as f:
      data = json.load(f)

    main_data = main_data + data
  
  with open(new_file_path, 'w') as f:
    json.dump(main_data, f)

  return len(main_data)


def create_vq_dead_functions(subject):
  print('Creating vq dead functions')
  ORIGINAL_FILES = glob.glob(EXAMPLES_PATH + subject +'/*__original.json')
  DEAD_FILES = glob.glob(EXAMPLES_PATH + subject +'/*__dead.json')
  
  if len(ORIGINAL_FILES) != len(DEAD_FILES):
    print('WARNINING: Some files are missing!')

  for file_path in ORIGINAL_FILES:
    get_all_dead_functions(file_path)

  ALL_DEAD_FILES = glob.glob(EXAMPLES_PATH + subject +'/*__all_dead.json')

  if len(ALL_DEAD_FILES) != len(DEAD_FILES):
    print('WARNINING: A File went missing!')

  new_path = EXAMPLES_PATH + subject + '/_vq_all_functions.json'
  num_all_func = combine_json_files(ORIGINAL_FILES, new_path)

  new_path = EXAMPLES_PATH + subject + '/_vq_dead_functions.json'
  num_dead_func = combine_json_files(ALL_DEAD_FILES, new_path)

  num_alive_func = num_all_func - num_dead_func
  
  return num_all_func, num_alive_func, num_dead_func


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
def get_dead_functions_stats(subject):
  GROUNDTRUTH_DEAD_PATH = EXAMPLES_GROUNDTRUTH_PATH + subject + '/_dead_functions.json'
  VQ_DEAD_PATH = EXAMPLES_PATH + subject + '/_vq_dead_functions.json'

  with open(GROUNDTRUTH_DEAD_PATH, 'r') as f:
    gt_data = json.load(f)

  with open(VQ_DEAD_PATH, 'r') as f:
    vq_data = json.load(f)

  true_positives = 0

  for vq_obj in vq_data:
    for gt_obj in gt_data:
      if vq_obj['bodyRange'] == gt_obj['bodyRange']:
        true_positives += 1
  
  false_positives = len(vq_data) - true_positives
  false_negatives = len(gt_data) - true_positives

  return true_positives, false_positives,false_negatives

def create_gt_table(subject, all, alive, dead):
  data = []
  if not os.path.exists('_groundtruth_.csv'):
    data.append(['Subject','AllFunctions','AliveFunctions','DeadFunctions'])

  with open('_groundtruth_.csv', 'a', newline='') as f:
    writer = csv.writer(f)

    data.append([subject,all,alive,dead])
    writer.writerows(data)

def create_vq_table(subject, true_positives, false_positives, false_negatives):
  data = []
  if not os.path.exists('_vazquez_.csv'):
    data.append(['Subject','Precision','Recall','f_score'])
    
  with open('_vazquez_.csv', 'a', newline='') as f:
    writer = csv.writer(f)

    # Precision = TruePositives / (TruePositives + FalsePositives)
    precision = round(float(true_positives / (true_positives + false_positives)),3)

    # Recall = TruePositives / (TruePositives + FalseNegatives)
    recall = round(float(true_positives / (true_positives + false_negatives)),3)

    # F-score = (2 * Precision * Recall) / (Precision + Recall)
    f_score = round(float((2 * precision * recall) / (precision + recall)),3)
    
    data.append([subject,precision,recall,f_score])
    writer.writerows(data)

def get_desriptive_stats(name, array):
  sd = np.std(array)
  mean = np.mean(array)
  median = np.median(array)
  max_value = np.max(array)
  min_value = np.min(array)
  # CV = (standard deviation / mean) * 100
  cv = (sd / mean) * 100
  return [name,min_value,max_value,median,mean,sd,cv]


def create_descriptive_stats():
  # Open the CSV file
  with open('_vazquez_.csv', 'r') as f:
    csv_data = list(csv.reader(f, delimiter=','))
    # Skip the header row
    csv_data = csv_data[1:]

    # Get a list of values from the column of interest
    precision = [float(row[1]) for row in csv_data]
    recall = [float(row[2]) for row in csv_data]
    f_score = [float(row[3]) for row in csv_data]
  
  data = []
  if not os.path.exists('__descriptive_stats_.csv'):
    data.append(['Metric','Min','Max','Median','Mean','SD','CV'])

  with open('_descriptive_stats_.csv', 'a', newline='') as f:
    writer = csv.writer(f)

    data.append(get_desriptive_stats('precision', precision))
    data.append(get_desriptive_stats('recall', recall))
    data.append(get_desriptive_stats('f_score', f_score))

    writer.writerows(data)


'''
The following function will compare the results of the vazquez tool with the ground truth.
The output can be found within _statistics_.csv 
'''
def get_vazquez_stats():
  SUBJECTS = next(os.walk(EXAMPLES_GROUNDTRUTH_PATH))[1]

  #loop through all of the available subjects
  for subject in sorted(SUBJECTS):

    # if subject not in 'troopjs_require':
    #   continue
    print('--- Current Subject: %s ---' % subject)
    # Create a _dead_functions.json file and retrieve basic ground truth data
    gt_all_func, gt_alive_func, gt_dead_func = create_gt_dead_functions(subject)
    create_gt_table(subject, gt_all_func, gt_alive_func, gt_dead_func)
    
    # Create a _dead_functions.json file 
    create_vq_dead_functions(subject)

    # Retrieve the number of true dead functions
    true_positives, false_positives, false_negatives = get_dead_functions_stats(subject)
    create_vq_table(subject, true_positives, false_positives, false_negatives)

  create_descriptive_stats()



if __name__ == '__main__':
  get_vazquez_stats()
  

