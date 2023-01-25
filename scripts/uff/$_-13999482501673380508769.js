(function(){{
    var c = Nd(b)[0], d = { xa: 1 };
    '*' != c.tag && (d.tag = 1);
    c.V.length || (d.V = 1);
    var e = p(c, d);
    return function (a) {
        return !e(a);
    };
}})();