from html_parser import parse_html

EXAMPLES_PATH = '../todomvc/examples/'

def get_uff_filenames(subject):
  proj_path = EXAMPLES_PATH + subject
  js_paths = parse_html(proj_path)

  for i in range(len(js_paths)):
    js_paths[i] = js_paths[i].replace('instrumented', 'optimized')
  
  uffs = []
  for js_path in js_paths:
    path = EXAMPLES_PATH + subject + '/' + js_path
    with open(path, 'rt') as f:
      data = f.read()

    pattern = r"eval\(\$dl\('uff/(.*?)'\)\)"
    regex = re.compile(pattern)

    uffs += regex.findall(data)
  return uffs

def get_uff_stats(subject, uffs_count):
  total_func = 0
  total_alive = 0

  uffs = get_uff_filenames(subject)
  total_dead = len(uffs)

  if total_dead != uffs_count:
    print('uff mismatch')

  return total_dead, get_uff_filenames(subject)