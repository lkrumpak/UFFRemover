(function(){{
    var r = t.value;
    if (typeof r != 'object' || r == null || r.constructor != Array)
        return n(        $that, t);
    var i = t.beanDef.$contentType;
    for (var s = 0; s < r.length; s++)
        e._checkType({
            dataHolder: r,
            dataName: s,
            value: r[s],
            beanDef: i,
            path: t.path + '["' + s + '"]'
        });
}})();