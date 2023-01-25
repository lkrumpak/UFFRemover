(function(){{
    var n = typeUtils.isArray(e), r = typeUtils.isObject(e), i = typeUtils.isArray(t), s = typeUtils.isObject(t);
    if (n && i) {
        for (var o = 0, u = t.length; o < u; o++)
            if (!                $that.contains(e[o], t[o]))
                return !1;
    } else {
        if (!r || !s) {
            var f = typeUtils.isDate(e) && typeUtils.isDate(t);
            return f ? t.getTime() === e.getTime() : t === e;
        }
        for (var a in t)
            if (t.hasOwnProperty(a)) {
                if (a.match(/:/))
                    continue;
                if (t.hasOwnProperty(a) && !                    $that.contains(e[a], t[a]))
                    return !1;
            }
    }
    return !0;
}})();