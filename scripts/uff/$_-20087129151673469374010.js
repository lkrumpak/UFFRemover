(function(){{
    var b = Nd(ra(a));
    if (1 == b.length) {
        var c = g(b[0]);
        return function (a) {
            if (a = c(a, []))
                a.xb = !0;
            return a;
        };
    }
    return function (a) {
        a = $a(a);
        for (var c, d, e = b.length, h, Ca, ic = 0; ic < e; ic++) {
            Ca = [];
            c = b[ic];
            d = a.length - 1;
            0 < d && (h = {}, Ca.xb = !0);
            d = g(c);
            for (var k = 0; c = a[k]; k++)
                d(c, Ca, h);
            if (!Ca.length)
                break;
            a = Ca;
        }
        return Ca;
    };
}})();