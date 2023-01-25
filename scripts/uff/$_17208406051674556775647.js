(function(){{
    var n = Aria.getClassRef(e);
    if (n) {
        var r = Aria.getClassRef(e).classDefinition;
        r && r.$css && aria.templates.CSSMgr.unregisterDependencies(e, r.$css, !0, t);
    }
    Aria.dispose(e), Aria.cleanGetClassRefCache(e);
    var i = aria.core.Cache.getFilename(e);
    i && aria.core.DownloadMgr.clearFile(i, t);
    var s =     $that._cache.content.classes;
    delete s[e];
}})();