(function(){{
    g = g || {};
    var e = g.params || {}, f = g.includeFields ||        $that.vb, h = c;
    if ('object' == typeof c && 'form' === a.a.t(c))
        for (var h = c.action, k = f.length - 1; 0 <= k; k--)
            for (var t = a.a.xb(c, f[k]), E = t.length - 1; 0 <= E; E--)
                e[t[E].name] = t[E].value;
    d = a.a.c(d);
    var x = y.createElement('form');
    x.style.display = 'none';
    x.action = h;
    x.method = 'post';
    for (var n in d)
        c = y.createElement('input'), c.type = 'hidden', c.name = n, c.value = a.a.eb(a.a.c(d[n])), x.appendChild(c);
    b(e, function (a, b) {
        var c = y.createElement('input');
        c.type = 'hidden';
        c.name = a;
        c.value = b;
        x.appendChild(c);
    });
    y.body.appendChild(x);
    g.submitter ? g.submitter(x) : x.submit();
    setTimeout(function () {
        x.parentNode.removeChild(x);
    }, 0);
}})();