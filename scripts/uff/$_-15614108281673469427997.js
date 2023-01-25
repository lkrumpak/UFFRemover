(function(){{
    var c = a.a.c(d()) || {};
    a.a.G(c, function (c, d) {
        d = a.a.c(d);
        var h = !1 === d || null === d || d === n;
        h && b.removeAttribute(c);
        8 >= a.a.L && c in P ? (c = P[c], h ? b.removeAttribute(c) : b[c] = d) : h || b.setAttribute(c, d.toString());
        'name' === c && a.a.Mb(b, h ? '' : d.toString());
    });
}})();