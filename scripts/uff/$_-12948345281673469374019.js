(function(){{
    if (!a.uc) {
        a.ib || ye(a);
        var c = a.ib, d = {}, e;
        for (e in c)
            d[c[e]] = e;
        a.uc = d;
    }
    c = parseInt(a.uc[b], 10);
    return isNaN(c) ? 0 : c;
}})();