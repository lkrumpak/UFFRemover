(function(){{
    for (var g = a, e = 1, f = []; g = g.nextSibling;) {
        if (d(g) && (e--, 0 === e))
            return f;
        f.push(g);
        b(g) && e++;
    }
    if (!c)
        throw Error('Cannot find closing comment tag to match: ' + a.nodeValue);
    return null;
}})();