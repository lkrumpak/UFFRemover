import os


def instrument_file(uff_path, dir_path):
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if file.endswith(".js"):
                path = os.path.join(root, file)
                command = "node " + uff_path + " instrument_file " + path
                os.system(command)
                print("running command: " + command)


if __name__ == '__main__':
    instrument_file('../../UFFRemover', '../subjects')