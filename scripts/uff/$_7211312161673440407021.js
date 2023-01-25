(function(){{
    var b = a.parentNode, c = 0, d = b[Pd], e = a._i || -1, g = b._l || -1;
    if (!d)
        return -1;
    d = d.length;
    if (g == d && 0 <= e && 0 <= g)
        return e;
    b._l = d;
    e = -1;
    for (b = b.firstElementChild || b.firstChild; b; b = b[bb])
        ab(b) && (b._i = ++c, a === b && (e = c));
    return e;
}})();