(function(){{
    var n =     $that._cache.content.classes;
    for (var r in n)
        if (n.hasOwnProperty(r) && n[r].content === e) {
            if (t) {
                Aria.dispose(r), Aria.cleanGetClassRefCache(r);
                var i = aria.core.Cache.getFilename(r);
                aria.core.DownloadMgr.clearFile(i, !0);
            }
            delete n[r];
        }
}})();