(function(){{
    if (typeof r.value != 'object' || r.value == null)
        return n(        $that, r);
    var i = r.beanDef.$classpath;
    if (i && !t.isInstanceOf(r.value, i)) {
        e._logError(e.NOT_OF_SPECIFIED_CLASSPATH, [
            i,
            r.beanDef[e._MD_TYPENAME],
            r.value,
            r.path
        ]);
        return;
    }
}})();