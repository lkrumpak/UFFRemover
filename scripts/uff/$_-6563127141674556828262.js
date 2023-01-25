(function(){{
    if ('string' == typeof b) {
        d = d || y;
        var c = d.getElementById(b);
        if (!c)
            throw Error('Cannot find template with ID ' + b);
        return new a.r.l(c);
    }
    if (1 == b.nodeType || 8 == b.nodeType)
        return new a.r.fa(b);
    throw Error('Unknown template type: ' + b);
}})();