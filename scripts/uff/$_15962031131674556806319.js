(function(){{
    var e = a.map.id, g = a.depMaps;
    if (!a.inited || !a.map.isDefine)
        return;
    return b[e] ? f[e] : (b[e] = a, each(g, function (f) {
        var g = f.id, h = c[g], i;
        if (o[g])
            return;
        if (h) {
            if (!h.inited || !h.enabled) {
                d[e] = !0;
                return;
            }
            i = C(h, b, d), d[g] || a.defineDepById(g, i);
        }
    }), a.check(!0), f[e]);
}})();