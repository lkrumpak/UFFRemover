(function(){{
    if ('odd' == b)
        return n;
    if ('even' == b)
        return x;
    if (-1 != b.indexOf('n')) {
        var c = b.split('n', 2), d = c[0] ? '-' == c[0] ? -1 : parseInt(c[0], 10) : 1, e = c[1] ? parseInt(c[1], 10) : 0, g = 0, h = -1;
        0 < d ? 0 > e ? e = e % d && d + e % d : 0 < e && (e >= d && (g = e - e % d), e %= d) : 0 > d && (d *= -1, 0 < e && (h = e, e %= d));
        if (0 < d)
            return function (a) {
                a = v(a);
                return a >= g && (0 > h || a <= h) && a % d == e;
            };
        b = e;
    }
    var k = parseInt(b, 10);
    return function (a) {
        return v(a) == k;
    };
}})();