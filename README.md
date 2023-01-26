# Introduction

This repo contains all the necessary files to evaluate the performance of [UFFRemover](https://github.com/hcvazquez/UFFRemover), a dead code elimination tool, on a set of 37 web applications. These applications originate from the [TodoMVC project](https://todomvc.com/). However, the repository has not been updated for a few years, so we took the time to update the necessary dependencies to be able to execute the web applications on modern hardware (see Requirements Section).

# Requirements

The following repo is a modified version of the original [UFFRemover](https://github.com/hcvazquez/UFFRemover). The purpose of this repo is to generate results for all 37 subjects, therefore several custom scripts and modifications were made. Here are the hardware specifications for which this project is certain to work on:

- node version: 18.12.1
- npm version: 8.19.2
- python: 3.10.9
- Hardware: Macbook pro (M1 chip), 16GB ram
- Chrome: 108.0.0

# Setup
## Install dependencies
In a terminal, run the following command:

```
bash setup.sh
```
or 
```
./setup.sh
```

This script installs all required dependencies for this project

## Host the target web applications
Now that all the dependencies of the target web applications have been installed, it is time to host them, before executing UFFRemover on the selectied web applications. To achieve this, run the following command within the todomvc folder:

```
gulp test-server
```
**_NOTE:_**  You should run the command in a seperate terminal or you can use something like [tmux](https://github.com/tmux/tmux).

# Execution

## Step 1. Acquire the Ground Truth Values [OPTIONAL]
This step is optional as the values from the ground truth are already provided. The values can be found at `todomvc\examples.groundtruth`. However, if you wish to retrieve the ground truth values, please visit the following [link](https://github.com/lkrumpak/lacuna-evaluation-ground-truth)

## Step 2. Instrumenting the subjects
Run the following script within the "scripts" folder:
```
python3 instrument_files.py
```

The following script will retrieve all used JS files by parsing the index.html for each subject within the examples folder. Once the instrumentation process is complete the script will also automatically updated all refrences to the new" instrumented.js" file.

## Step 3. Obtaining the logs [Optional]
**_NOTE:_** The Log files for each subject is already provided but in case you want to obtian the logs yourself you can follow this step.

Now its time to host the web apps (see above).

In a seperate terminal or using tmux open the tests folder and run the following command:

```
npm run test
``` 

The above command will run automated tests that will interact with the website. After each interaction, the console will prompt you to download the logs from the browser console. Once complete, press enter and continue until you have completed this step for all subjects. (Before downloading the logs make sure you delete at least one item from the todo list since I was unable to reproduce this action reliably using the script)

**_IMPORTANT_NOTE:_** The script might sometimes freeze and you might want to restart to ensure you have collected all possible actions

## Step 4. Running the UFFRemover Optimizer
The following script will run the optimizor on each subject using the logs from the "interaction" folder. If you wish to use the logs from the "no-interaction" folder you will have to edit the path within "subject_optimizor.py"

``` 
python3 subject_optimizor.py
``` 

within the 'scripts/output' folder you will find a json file for each subject with the results of the optimization.

## Step 5. Statistics
The following command will create 3 .csv files within the scripts folder. The files contain different data used in the following paper "Empirical Assessment of the performance of UFFRemover".
``` 
python3 statistics.py
```

## Step 6. Graphs
The following command will create a box plot for Precsion, Recall, and f-score. The graph is used to comapre UFFRemover with [Lacuna](https://github.com/S2-group/Lacuna).
``` 
python3 graphs.py
```
