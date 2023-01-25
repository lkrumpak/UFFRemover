(function(){{
    if (c.length) {
        var e = c[0], f = c[c.length - 1], h = e.parentNode, k = a.J.instance, n = k.preprocessNode;
        if (n) {
            b(e, f, function (a, b) {
                var c = a.previousSibling, d = n.call(k, a);
                d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c));
            });
            c.length = 0;
            if (!e)
                return;
            e === f ? c.push(e) : (c.push(e, f), a.a.ka(c, h));
        }
        b(e, f, function (b) {
            1 !== b.nodeType && 8 !== b.nodeType || a.pb(d, b);
        });
        b(e, f, function (b) {
            1 !== b.nodeType && 8 !== b.nodeType || a.D.Sb(b, [d]);
        });
        a.a.ka(c, h);
    }
}})();