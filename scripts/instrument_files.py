import os
from html_parser import parse_html

SUBJECT_PATH = '../todomvc/examples/'
UFF_PATH = '../../UFFRemover'

# instrument the js files within the subjects folders
def instrument_files():
    subjects = next(os.walk(SUBJECT_PATH))[1]

    for subject in subjects:
        PROJ_PATH = SUBJECT_PATH + subject
        js_paths = parse_html(subject, PROJ_PATH)
        
        for js_path in js_paths:
            rename_js_files(PROJ_PATH, js_path)

            command = "node " + UFF_PATH + " instrument_file " + PROJ_PATH + "/" + js_path
            print(command)
            os.system(command)

def rename_js_files(dir_path, js_file):
    with open(dir_path + '/index.html', "r") as f:
        contents = f.read()

    # If file is already instrumented, skip this step 
    if 'instrumented.js' in js_file:
        modified_file = js_file
    else:
        modified_file = js_file.replace('.js','-instrumented.js')

    # Update the contents of the html with the new -instrumented file
    contents = contents.replace(js_file, modified_file)

    with open(dir_path + '/index.html', "w") as f:
        f.write(contents)

if __name__ == '__main__':

    instrument_files()
