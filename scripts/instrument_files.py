import os


# def instrument_file(uff_path, dir_path):
#     for root, dirs, files in os.walk(dir_path):
#         for file in files:
#             if file.endswith(".js"):
#                 path = os.path.join(root, file)
#                 command = "node " + uff_path + " instrument_file " + path
#                 os.system(command)
#                 print("running command: " + command)

def parse_html(dir_path):
    paths = []
    with open(dir_path + '/index.html', 'rt') as f:
        data = f.readlines()
    for line in data:
        if '<script src=' in line:
            path = line.split('"')[1]
            paths.append(path)
    return paths


if __name__ == '__main__':
    uff_path = '../../UFFRemover'

    for webapp in next(os.walk('../subjects'))[1]:
        proj_path = '../subjects/' + webapp
        js_paths = parse_html(proj_path)

        for js_path in js_paths:
            command = "node " + uff_path + " instrument_file " + proj_path + "/" +js_path
            #os.system(command)
            print("running command: " + command)

