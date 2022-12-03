import os


def parse_html(dir_path):
    paths = []
    with open(dir_path + '/index.html', 'rt') as f:
        data = f.readlines()
    for line in data:
        if '<script src=' in line:
            path = line.split('"')[1]
            paths.append(path)
    return paths


def generate_output_file(func, uff, subject, file):
    output_file = subject + '-output.txt'
    print("output file: " + output_file)

    with open(output_file, 'r+') as f:
        f.read()
        f.write("File: " + file + '\n')
        f.write("Nr functions: " + func + '\n')
        f.write("Nr uff: " + uff + '\n')


def parse_optimizer_output(output, subject, file):
    print("parsing output ...")
    output = output.split('\n')
    functions = [s for s in output if "Functions_in_bundle" in s]
    uffs = [s for s in output if "UFFs detected" in s]
    func = functions[0].split(" ")[-1].replace(",", "")
    uff = uffs[0].split(" ")[-1].replace(",", "")
    generate_output_file(func, uff, subject, file)


def run_optimize_cmd(cmd, subject, file):
    print("running cmd: " + cmd)
    output_file = 'output.txt'
    result_code = os.system(cmd + ' > ' + output_file)
    if os.path.exists(output_file):
        fp = open(output_file, "r")
        output = fp.read()
        fp.close()
        os.remove(output_file)
        parse_optimizer_output(output, subject, file)


def optimize_subjects(subjects=None):
    if subjects is None:
        subjects = next(os.walk('../subjects'))[1]

    uff_path = '../../UFFRemover'

    for webapp in subjects:
        proj_path = '../subjects/' + webapp
        log_path = '../logs/' + webapp + ".log"
        js_paths = parse_html(proj_path)
        print("=== Current Subject: " + webapp + " ===")

        for js_path in js_paths:
            js_path = js_path.replace("-instrumented", '')
            filename = js_path.split("/")[-1].split(".")[0]

            print("Analyzing file: " + filename)
            cmd = 'node ' + uff_path + ' optimize_file_browser ../subjects/' + webapp + '/' + js_path + ' ' + log_path
            run_optimize_cmd(cmd, webapp, filename)
            print("------")


if __name__ == '__main__':
    # optimize 1 or multiple subjects
    s = ["vue"]
    optimize_subjects(s)

    # optimize all subjects
    # optimize_subjects()
