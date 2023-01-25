(function(){{
    if (a.classList)
        B(b, function (b) {
            ke(a, b);
        });
    else {
        var c = {};
        B(ie(a), function (a) {
            c[a] = !0;
        });
        B(b, function (a) {
            c[a] = !0;
        });
        a.className = '';
        for (var d in c)
            a.className += 0 < a.className.length ? ' ' + d : d;
    }
}})();