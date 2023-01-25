(function(){{
    var f = b.getAttribute('params');
    if (f) {
        var f = d.parseBindingsString(f, e, b, {
                valueAccessors: !0,
                bindingParams: !0
            }), f = a.a.na(f, function (d) {
                return a.s(d, null, { o: b });
            }), h = a.a.na(f, function (d) {
                return d.Z() ? a.s(function () {
                    return a.a.c(d());
                }, null, { o: b }) : d.v();
            });
        h.hasOwnProperty('$raw') || (h.$raw = f);
        return h;
    }
    return { $raw: {} };
}})();