(function(){{
    function e() {
        return a.a.ta(b.options, function (a) {
            return a.selected;
        });
    }
    function f(a, b, c) {
        var d = typeof b;
        return 'function' == d ? b(a) : 'string' == d ? a[b] : c;
    }
    function h(c, d) {
        if (s.length) {
            var e = 0 <= a.a.m(s, a.i.q(d[0]));
            a.a.Nb(d[0], e);
            q && !e && a.k.B(a.a.oa, null, [
                b,
                'change'
            ]);
        }
    }
    var k = 0 != b.length && b.multiple ? b.scrollTop : null, g = a.a.c(d()), m = c.get('optionsIncludeDestroyed');
    d = {};
    var l, s;
    s = b.multiple ? a.a.Da(e(), a.i.q) : 0 <= b.selectedIndex ? [a.i.q(b.options[b.selectedIndex])] : [];
    g && ('undefined' == typeof g.length && (g = [g]), l = a.a.ta(g, function (b) {
        return m || b === n || null === b || !a.a.c(b._destroy);
    }), c.has('optionsCaption') && (g = a.a.c(c.get('optionsCaption')), null !== g && g !== n && l.unshift(K)));
    var q = !1;
    d.beforeRemove = function (a) {
        b.removeChild(a);
    };
    g = h;
    c.has('optionsAfterRender') && (g = function (b, d) {
        h(0, d);
        a.k.B(c.get('optionsAfterRender'), null, [
            d[0],
            b !== K ? b : n
        ]);
    });
    a.a.Za(b, l, function (d, e, g) {
        g.length && (s = g[0].selected ? [a.i.q(g[0])] : [], q = !0);
        e = b.ownerDocument.createElement('option');
        d === K ? (a.a.bb(e, c.get('optionsCaption')), a.i.ca(e, n)) : (g = f(d, c.get('optionsValue'), d), a.i.ca(e, a.a.c(g)), d = f(d, c.get('optionsText'), g), a.a.bb(e, d));
        return [e];
    }, d, g);
    a.k.B(function () {
        c.get('valueAllowUnset') && c.has('value') ? a.i.ca(b, a.a.c(c.get('value')), !0) : (b.multiple ? s.length && e().length < s.length : s.length && 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) !== s[0] : s.length || 0 <= b.selectedIndex) && a.a.oa(b, 'change');
    });
    a.a.dc(b);
    k && 20 < Math.abs(k - b.scrollTop) && (b.scrollTop = k);
}})();