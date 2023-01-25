(function(){{
        $that._cache || (    $that._cache = aria.core.Cache),     $that.$assert(34,     $that._cache),     $that.$assert(35, t.scope),     $that.$assert(36, t.fn);
    var r =         $that._cache, i = r.getItem('files', e, !0), s = i.status;
    if (s == r.STATUS_AVAILABLE || s == r.STATUS_ERROR) {
        var o = {
            name: 'fileReady',
            src:             $that,
            logicalPaths: [e],
            url: null
        };
        return        $that.$callback(t, o);
    }
    var u = i.loader;
    if (!u) {
                $that.$assert(63, aria.core.FileLoader);
        var a;
        n && n.fullLogicalPath ? a = n.fullLogicalPath : a =         $that.resolveURL(e);
        var f = r.getItem('urls', a, !0);
        if (f.status ==            $that._cache.STATUS_AVAILABLE) {
            var o = {
                name: 'fileReady',
                src:                 $that,
                logicalPaths: [e],
                url: a,
                downloadFailed: !0
            };
            return            $that.$callback(t, o);
        }
        f.loader ?         $that.$assert(72, f.status == r.STATUS_LOADING) : (f.loader = new aria.core.FileLoader(a), f.status = r.STATUS_LOADING, f.loader.$on({
            complete:             $that._onFileLoaderComplete,
            scope:             $that
        })), u = f.loader, i.loader = u, a = f = null;
    }
    u.addLogicalPath(e);
    var l = t.args ? t.args : null;
    u.$on({
        fileReady: {
            fn: t.fn,
            args: l,
            scope: t.scope
        }
    }), u.loadFile(), l = u = null;
}})();