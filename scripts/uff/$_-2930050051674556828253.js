(function(){{
    var e = f.hasOwnProperty(d) ? f[d] : b, l;
    e || (e = f[d] = new a.P(), c(d, function (a) {
        h[d] = a;
        delete f[d];
        l ? e.notifySubscribers(a) : setTimeout(function () {
            e.notifySubscribers(a);
        }, 0);
    }), l = !0);
    e.U(g);
}})();