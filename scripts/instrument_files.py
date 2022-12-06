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


def instrument_files(subjects=None):
    if subjects is None:
        subjects = next(os.walk('../subjects'))[1]

    uff_path = '../../UFFRemover'

    for webapp in subjects:
        proj_path = '../subjects/' + webapp
        js_paths = parse_html(proj_path)

        for js_path in js_paths:
            command = "node " + uff_path + " instrument_file " + proj_path + "/" + js_path
            os.system(command)
            print("running command: " + command)


if __name__ == '__main__':
    # instrument 1 or multiple subjects
    s = ["somajs"]
    instrument_files(s)

    # instrument all subjects
    # instrument_files()
