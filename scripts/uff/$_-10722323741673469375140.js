(function(){{
    var r =         $that._cache, i = r.getItem('classes', e, !0), s = i.status;
    if (s == r.STATUS_AVAILABLE || s == r.STATUS_ERROR)
        return null;
    var o = i.loader;
    if (!o) {
        var u = t != null ?         $that._classTypes[t] : aria.core.ClassLoader;
        typeof u == 'string' && (u = Aria.getClassRef(u)), u ? (o = new u(e, t), i.loader = o, i.content = t, o.$on({
            complete:             $that._onClassLoaderComplete,
            scope:             $that
        })) :         $that.$logError(        $that.MISSING_CLASSLOADER, [
            t,
            e
        ]);
    }
    return i.status = r.STATUS_LOADING, o;
}})();