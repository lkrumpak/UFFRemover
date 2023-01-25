(function(){{
    for (var d = a.length, e = u(a) ? a.split('') : a, g = 0; g < d; g++)
        if (g in e && b.call(c, e[g], g, a))
            return g;
    return -1;
}})();