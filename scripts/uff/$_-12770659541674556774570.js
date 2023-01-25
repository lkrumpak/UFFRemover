(function(){{
    var b = Od[a.Ga];
    if (b)
        return b;
    var c = a.nc, c = c ? c.yb : '', d = p(a, { xa: 1 }), e = '*' == a.tag, g = document.getElementsByClassName;
    if (c)
        g = { xa: 1 }, e && (g.tag = 1), d = p(a, g), '+' == c ? b = m(d) : '~' == c ? b = k(d) : '>' == c && (b = h(d));
    else if (a.id)
        d = !a.pc && e ? Ia : p(a, {
            xa: 1,
            id: 1
        }), b = function (b, c) {
            var e = Ac(b).a(a.id), g;
            if ((g = e && d(e)) && !(g = 9 == b.nodeType)) {
                for (g = e.parentNode; g && g != b;)
                    g = g.parentNode;
                g = !!g;
            }
            if (g)
                return $a(e, c);
        };
    else if (g && /\{\s*\[native code\]\s*\}/.test(String(g)) && a.V.length && !Md)
        var d = p(a, {
                xa: 1,
                V: 1,
                id: 1
            }), n = a.V.join(' '), b = function (a, b) {
                for (var c = $a(0, b), e, g = 0, h = a.getElementsByClassName(n); e = h[g++];)
                    d(e, a) && c.push(e);
                return c;
            };
    else
        e || a.pc ? (d = p(a, {
            xa: 1,
            tag: 1,
            id: 1
        }), b = function (b, c) {
            for (var e = $a(0, c), g, h = 0, df = b.getElementsByTagName(a.Rb()); g = df[h++];)
                d(g, b) && e.push(g);
            return e;
        }) : b = function (b, c) {
            for (var d = $a(0, c), e, g = 0, h = b.getElementsByTagName(a.Rb()); e = h[g++];)
                d.push(e);
            return d;
        };
    return Od[a.Ga] = b;
}})();