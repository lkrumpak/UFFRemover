(function(){{
    var e = aria.core.ClassMgr, t =         $that._loadDesc, n = !1, r = !0, i = {
            JS: e.filterMissingDependencies(t.classes),
            TPL: e.filterMissingDependencies(t.templates),
            RES: e.filterMissingDependencies(t.resources, 'RES'),
            CSS: e.filterMissingDependencies(t.css),
            TML: e.filterMissingDependencies(t.tml),
            TXT: e.filterMissingDependencies(t.txt),
            CML: e.filterMissingDependencies(t.cml)
        };
    for (var s in i)
        if (i.hasOwnProperty(s)) {
            var o = i[s];
            n = n || o === !1, r = r && o === null;
        }
    if (n || r)
                $that._execCallback(!0, n);
    else {
        var u = new aria.core.ClassLoader();
                $that._loadDesc.onerror &&        $that._loadDesc.onerror.override && (u.handleError = !1),         $that._clsLoader = u, u.$on({
            classReady:             $that._onClassesReady,
            classError:             $that._onClassesError,
            complete:             $that._onClassLoaderComplete,
            scope:             $that
        });
        for (s in i)
            i.hasOwnProperty(s) && (o = i[s], o && u.addDependencies(o, s));
        u.loadDependencies();
    }
}})();