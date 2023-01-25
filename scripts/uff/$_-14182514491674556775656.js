(function(){{
    if (typeof t.value != 'string')
        return n(        $that, t);
    var r = t.beanDef;
    while (!r[e._MD_BUILTIN]) {
        var i = r.$regExp;
        if (i != null && !i.test(t.value))
            return e._logError(e.REGEXP_FAILED, [
                t.value,
                t.path,
                i,
                r[e._MD_TYPENAME]
            ]);
        r = r[e._MD_PARENTDEF];
    }
}})();