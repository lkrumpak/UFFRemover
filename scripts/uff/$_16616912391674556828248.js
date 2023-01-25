(function(){{
    if (!c) {
        c = !0;
        var d = b.notifySubscribers;
        b.notifySubscribers = function (a, b) {
            b && 'change' !== b || ++f;
            return d.apply(this, arguments);
        };
        var g = [].concat(b.v() || []);
        e = null;
        b.U(function (c) {
            c = [].concat(c || []);
            if (b.Ab('arrayChange')) {
                var d;
                if (!e || 1 < f)
                    e = a.a.Fa(g, c, { sparse: !0 });
                d = e;
                d.length && b.notifySubscribers(d, 'arrayChange');
            }
            g = c;
            e = null;
            f = 0;
        });
    }
}})();