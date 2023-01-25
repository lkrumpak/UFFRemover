import matplotlib.pyplot as plt
import numpy as np
import csv


def retrieve_file_stats(file_name):
  # Open the CSV file
  with open(file_name, 'r') as f:
    csv_data = list(csv.reader(f, delimiter=','))
    # Skip the header row
    csv_data = csv_data[1:]

    # Get a list of values from the column of interest
    precision = [float(row[1]) for row in csv_data]
    recall = [float(row[2]) for row in csv_data]
    f_score = [float(row[3]) for row in csv_data]
  return precision, recall, f_score


def create_graphs(v_data, l_data, filename):
  plt.rcParams.update({'font.size': 20})
  fig = plt.figure(figsize =(10, 7))

  # Creating plot
  ax = fig.add_subplot(111)
  ax.boxplot([v_data, l_data])
  
  ax.set_title(filename + ': UFFremover vs Lacuna')
  ax.set_xlabel('Tool')
  ax.set_ylabel(filename,)
  ax.set_xticklabels(['UFFremover','Lacuna'])
  ax.tick_params(axis='x', labelsize=16)
  ax.tick_params(axis='y', labelsize=16)
  # show plot
  plt.savefig(filename +'.pdf')



if __name__ == '__main__':
  v_precision, v_recall, v_fscore = retrieve_file_stats('_vazquez_.csv')
  l_precision, l_recall, l_fscore = retrieve_file_stats('_lacuna_.csv')

  create_graphs(v_precision,l_precision,'Precision')
  create_graphs(v_recall,l_recall,'Recall')
  create_graphs(v_fscore,l_fscore,'F-score')
  