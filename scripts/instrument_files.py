import os
from html_parser import parse_html


# instrument the js files within the subjects folders
def instrument_files(subjects=None):
    if subjects is None:
        subjects = next(os.walk('../subjects'))[1]

    uff_path = '../../UFFRemover'

    for webapp in subjects:
        proj_path = '../subjects/' + webapp
        js_paths = parse_html(proj_path)

        for js_path in js_paths:
            command = "node " + uff_path + " instrument_file " + proj_path + "/" + js_path

            # os.system(command)
            print("running command: " + command)


if __name__ == '__main__':
    # instrument 1 or multiple subjects
    # if argument is left empty all the subjects will be considered
    s = ["somajs", "react"]
    instrument_files(s)
