import os, csv, json
from html_parser import parse_html
from subject import OptimisedSubject, OptimisedFile


def generate_output_file(subject):
    directory = 'output/'
    output_file = subject.name + '-output.json'
    file_path = os.path.join(directory, output_file)

    print("Creating output file: " + file_path)

    # create an output directory if its missing
    if not os.path.isdir(directory):
        os.mkdir(directory)

    with open(file_path, "w") as outfile:
        json_object = json.dumps(subject.generate_json_output(), indent=4)
        outfile.write(json_object)


def parse_optimizer_output(output):
    print("Parsing output ...")

    output = output.split('\n')
    functions = [s for s in output if "Functions_in_bundle" in s]
    uffs = [s for s in output if "UFFs detected" in s]

    func = functions[0].split(" ")[-1].replace(",", "")
    uff = uffs[0].split(" ")[-1].replace(",", "")
    return int(func), int(uff)


def create_optimised_file(filename, output):
    file_obj = OptimisedFile(filename)
    func, uff = parse_optimizer_output(output)

    file_obj.uff = uff
    file_obj.alive_functions = func

    return file_obj


def run_optimize_cmd(cmd):
    print("Running cmd: " + cmd)

    # create a temp output file in order to read the output of the command
    output_file = 'output.txt'
    os.system(cmd + ' > ' + output_file)

    if os.path.exists(output_file):
        fp = open(output_file, "r")
        output = fp.read()
        fp.close()
        os.remove(output_file)
        return output


def optimize_subjects(subjects=None):
    if subjects is None:
        subjects = next(os.walk('../subjects'))[1]

    uff_path = '../../UFFRemover'

    for webapp in subjects:
        print("=== Current Subject: " + webapp + " ===")

        proj_path = '../subjects/' + webapp
        log_path = '../logs/' + webapp + ".log"
        js_paths = parse_html(proj_path)

        subject_obj = OptimisedSubject(webapp)

        for js_path in js_paths:
            js_path = js_path.replace("-instrumented", '')
            filename = js_path.split("/")[-1]

            # TODO dirty fix, should be moved to html parser
            if filename != "soma-v2.1.4.min.js":

                print("Optimizing file: " + filename)
                cmd = 'node ' + uff_path + ' optimize_file_browser ' + proj_path + '/' + js_path + ' ' + log_path

                output = run_optimize_cmd(cmd)
                file_obj = create_optimised_file(filename, output)
                subject_obj.add_file(file_obj)
                print("----")

        generate_output_file(subject_obj)
        print("Optimizing Complete")

if __name__ == '__main__':
    # optimize 1 or multiple subjects
    # "riotjs","somajs","typescript-react","sapui5",enyo_backbone
    optimize_subjects()

