(function(){{
    var n = t.$enumValues, r = t[e._MD_PARENTDEF], i = null;
    if (!r[e._MD_BUILTIN]) {
        i = r[e._MD_ENUMVALUESMAP];
        if (n == null) {
            t[e._MD_ENUMVALUESMAP] = i;
            return;
        }
    } else if (n == null || n.length === 0)
        n = [], e._logError(e.MISSING_ENUMVALUES, [t[e._MD_TYPENAME]]);
    var s = {};
    for (var o = 0; o < n.length; o++) {
        var u = n[o];
        s[u] == 1 ? e._logError(e.ENUM_DUPLICATED_VALUE, [
            u,
            t[e._MD_TYPENAME]
        ]) : i && i[u] != 1 ? e._logError(e.ENUM_INVALID_INHERITANCE, [
            u,
            t[e._MD_TYPENAME],
            r[e._MD_TYPENAME]
        ]) : s[u] = 1;
    }
    t[e._MD_ENUMVALUESMAP] = s;
}})();