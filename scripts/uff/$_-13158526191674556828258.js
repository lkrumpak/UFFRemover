(function(){{
    if ('select' != a.a.t(b))
        throw Error('values binding applies only to SELECT elements');
    var c = a.a.c(d());
    c && 'number' == typeof c.length && a.a.u(b.getElementsByTagName('option'), function (b) {
        var d = 0 <= a.a.m(c, a.i.q(b));
        a.a.Nb(b, d);
    });
}})();