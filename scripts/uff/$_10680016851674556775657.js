(function(){{
    var r = t.value, i = t.beanDef;
    if (typeof r != 'object' || r == null)
        return n(        $that, t);
    var s = i.$properties, o = {};
    if (e._options.checkEnabled && i.$restricted)
        for (var u in r) {
            if (!r.hasOwnProperty(u) || u.indexOf(':') != -1 || u.charAt(0) == '_')
                continue;
            o[u] = 1;
        }
    for (var u in s) {
        if (!s.hasOwnProperty(u) || u.indexOf(':') != -1 || u.charAt(0) == '_')
            continue;
        var a = s[u];
        delete o[u], e._checkType({
            dataHolder: r,
            dataName: u,
            value: r[u],
            beanDef: a,
            path: t.path + '["' + u + '"]'
        });
    }
    if (e._options.checkEnabled && i.$restricted)
        for (var u in o)
            r.hasOwnProperty(u) && o[u] == 1 && e._logError(e.UNDEFINED_PROPERTY, [
                u,
                t.path,
                i[e._MD_TYPENAME]
            ]);
}})();