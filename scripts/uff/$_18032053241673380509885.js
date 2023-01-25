(function(){{
    if (!e)
        return null;
    var n =         $that._cache, r, i, s = null, o;
    for (var u = 0, a = e.length; u < a; u++) {
        r = e[u], i = n.getItem('classes', r, !0), o = i.status;
        if (o != n.STATUS_AVAILABLE) {
            if (o == n.STATUS_ERROR)
                return !1;
            o == n.STATUS_NEW && Aria.getClassRef(r) && t != 'RES' ? i.status = n.STATUS_AVAILABLE : (s || (s = []), s.push(r));
        }
    }
    return s;
}})();