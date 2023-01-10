# This function is made to parse website from todo_mvc and might not run correctly for all projects
def parse_html(dir_path):
    paths = []
    with open(dir_path + '/index.html', 'rt') as f:
        data = f.readlines()
    for line in data:
        path = parse_js_file(line)

        if path != None:
            paths += path
    return paths

def parse_js_file(line):
    if 'src=' in line:
        # Return if the line has been commented
        if parsing_exceptions(line):
            return

        # Retrieve the .js file
        line = line.split('"')
        path = [s for s in line if s.endswith('.js') and 'http' not in s]
        
        return path

def parsing_exceptions(line):
    if '<!--' in line or '/build/soma.js' in line:
        return True
    return False