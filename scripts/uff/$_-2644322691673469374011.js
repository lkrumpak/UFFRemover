(function(){{
    if (!a)
        return Ia;
    b = b || {};
    var c = null;
    b.xa || (c = Ea(c, zb));
    b.tag || '*' != a.tag && (c = Ea(c, function (b) {
        return b && b.tagName == a.Rb();
    }));
    b.V || B(a.V, function (a, b) {
        var d = new RegExp('(?:^|\\s)' + a + '(?:\\s|$)');
        c = Ea(c, function (a) {
            return d.test(a.className);
        });
        c.count = b;
    });
    b.ra || B(a.ra, function (a) {
        var b = a.name;
        jc[b] && (c = Ea(c, jc[b](b, a.value)));
    });
    b.gb || B(a.gb, function (a) {
        var b, d = a.Jb;
        a.type && Qd[a.type] ? b = Qd[a.type](d, a.$b) : d.length && (b = ff(d));
        b && (c = Ea(c, b));
    });
    b.id || a.id && (c = Ea(c, function (b) {
        return !!b && b.id == a.id;
    }));
    c || 'default' in b || (c = Ia);
    return c;
}})();