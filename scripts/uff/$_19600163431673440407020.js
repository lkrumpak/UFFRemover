(function(){{
    if (Jd) {
        var c = Kd[a];
        if (c && !b)
            return c;
    }
    if (c = Ld[a])
        return c;
    var c = a.charAt(0), g = -1 == a.indexOf(' ');
    0 <= a.indexOf('#') && g && (b = !0);
    if (!Jd || b || -1 != '>~+'.indexOf(c) || T && -1 != a.indexOf(':') || Md && 0 <= a.indexOf('.') || -1 != a.indexOf(':contains') || -1 != a.indexOf('|=')) {
        var h = a.split(/\s*,\s*/);
        return Ld[a] = 2 > h.length ? e(a) : function (a) {
            for (var b = 0, c = [], d; d = h[b++];)
                c = c.concat(e(d)(a));
            return c;
        };
    }
    var k = 0 <= '>~+'.indexOf(a.charAt(a.length - 1)) ? a + ' *' : a;
    return Kd[a] = function (b) {
        try {
            if (9 != b.nodeType && !g)
                throw Error('');
            var c = b.querySelectorAll(k);
            T ? c.Ec = !0 : c.xb = !0;
            return c;
        } catch (e) {
            return d(a, !0)(b);
        }
    };
}})();