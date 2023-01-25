(function(){{
        $that._cache || (    $that._cache = aria.core.Cache),     $that.$assert(2,     $that._cache),     $that.$assert(72, n && n.fn && n.scope);
    var r =         $that._cache, i =         $that.getClassLoader(e);
    if (!i) {
        var s = r.getItem('classes', e, !0);
        s.status = r.STATUS_LOADING, s = null, i =         $that.getClassLoader(e);
    }
    i.notifyClassDefinitionCalled();
    if (!t)
        return !0;
    i.callback = n;
    var o = !0;
    for (var u in t)
        if (t.hasOwnProperty(u)) {
            var a =             $that.filterMissingDependencies(t[u]);
            a != null && (o = !1, i.addDependencies(a, u));
        }
    if (o) {
        var s = r.getItem('classes', e, !0);
        return s.status = r.STATUS_LOADING, !0;
    }
    var f = i.getCircular();
    return f ? (    $that.$logError(    $that.CIRCULAR_DEPENDENCY, [
        e,
        f
    ]),     $that.notifyClassLoadError(e)) : (i.loadDependencies(), !1);
}})();