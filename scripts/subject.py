class OptimisedFile:
    def __init__(self, file_path):
        self.file_path = file_path
        self.total_functions = 0
        self.uff = 0

    def generate_json_output(self):
        return {
            "file": self.file_path,
            "total_functions": self.total_functions,
            "uff": self.uff
        }


class OptimisedSubject:
    def __init__(self, name):
        self.name = name
        self.files = []
        self.total_functions = 0
        self.total_uff = 0

    def add_file(self, file):
        self.files.append(file)
        self.total_functions += file.total_functions
        self.total_uff += file.uff

    def generate_json_output(self):
        return {
            "subject": self.name,
            "total_functions": self.total_functions,
            "total_uff": self.total_uff,
            "files": [f.generate_json_output() for f in self.files]
        }

