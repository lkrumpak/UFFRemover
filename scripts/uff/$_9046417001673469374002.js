(function(){{
    function e(c) {
        c && b.appendChild(u(c) ? a.createTextNode(c) : c);
    }
    for (; d < c.length; d++) {
        var g = c[d];
        if (!ea(g) || fa(g) && 0 < g.nodeType)
            e(g);
        else {
            var h;
            a: {
                if (g && 'number' == typeof g.length) {
                    if (fa(g)) {
                        h = 'function' == typeof g.item || 'string' == typeof g.item;
                        break a;
                    }
                    if (y(g)) {
                        h = 'function' == typeof g.item;
                        break a;
                    }
                }
                h = !1;
            }
            B(h ? Ta(g) : g, e);
        }
    }
}})();