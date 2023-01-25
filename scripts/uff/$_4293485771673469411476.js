(function(){{
    if (r === 'scoped-css')
        i = 1;
    else if (n.parsers.css[r])
        e = n.parsers.css[r](t, e);
    else if (r !== 'css')
        throw new Error('CSS parser not found: "' + r + '"');
    if (i)
        e = ve(t, e);
    return e.replace(/\s+/g, ' ').replace(/\\/g, '\\\\').replace(/'/g, '\\\'').trim();
}})();