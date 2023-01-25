(function(){{
    if (typeof t.value != 'string')
        return n(        $that, t);
    var r = t.beanDef[e._MD_ENUMVALUESMAP];
    r[t.value] != 1 && e._logError(e.ENUM_UNKNOWN_VALUE, [
        t.value,
        t.path,
        t.beanDef[e._MD_TYPENAME]
    ]);
}})();