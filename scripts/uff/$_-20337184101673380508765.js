(function(){{
    if (a && a.xb)
        return a;
    var b = [];
    if (!a || !a.length)
        return b;
    a[0] && b.push(a[0]);
    if (2 > a.length)
        return b;
    N++;
    if (T && Da) {
        var c = N + '';
        a[0].setAttribute('_zipIdx', c);
        for (var d = 1, e; e = a[d]; d++)
            a[d].getAttribute('_zipIdx') != c && b.push(e), e.setAttribute('_zipIdx', c);
    } else if (T && a.Ec)
        try {
            for (d = 1; e = a[d]; d++)
                zb(e) && b.push(e);
        } catch (g) {
        }
    else
        for (a[0] && (a[0]._zipIdx = N), d = 1; e = a[d]; d++)
            a[d]._zipIdx != N && b.push(e), e._zipIdx = N;
    return b;
}})();