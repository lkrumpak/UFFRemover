(function(){{
        $that._typeUtils.isString(e) && (e = [e]);
    var t = function (e, n, r) {
            if (e.length === 0)
                return;
            for (var i in n) {
                var s = n[i];
                if (typeof s == 'string') {
                    s = '/' + s;
                    for (var o = 0, u = e.length; o < u; o++) {
                        var a = e[o];
                        if (s.substr(0, a.length) == a) {
                            r[s] = !0, e.slice(o, o);
                            break;
                        }
                    }
                } else
                    t(e, n[i], r);
            }
        }, n = [];
    for (var r = 0, i = e.length; r < i; r++)
        n.push(e[r]);
    var s = {};
    t(e,     $that._urlMap, s);
    var o = [];
    for (var u in s)
        o.push(u);
    return o;
}})();