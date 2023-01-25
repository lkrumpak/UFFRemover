(function(){{
    if (!(err instanceof Error))
        throw err;
    if ((typeof window != 'undefined' || !filename) && !str) {
        err.message += ' on line ' + lineno;
        throw err;
    }
    try {
        str = str || _dereq_('fs').readFileSync(filename, 'utf8');
    } catch (ex) {
        rethrow(err, null, lineno);
    }
    var context = 3, lines = str.split('\n'), start = Math.max(lineno - context, 0), end = Math.min(lines.length, lineno + context);
    // Error context
    var context = lines.slice(start, end).map(function (line, i) {
        var curr = i + start + 1;
        return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
    }).join('\n');
    // Alter exception message
    err.path = filename;
    err.message = (filename || 'Jade') + ':' + lineno + '\n' + context + '\n\n' + err.message;
    throw err;
}})();