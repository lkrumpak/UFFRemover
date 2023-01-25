(function(){{
    var t = e.src, n =         $that._cache, r, i = t.getLogicalPaths();
    if (i) {
        var s = i.length;
        for (var o = 0; s > o; o++)
            r = n.getItem('files', i[o], !1), r && (            $that.$assert(120, r.loader == t), r.loader = null);
    }
    r = n.getItem('urls', t.getURL(), !1), r && (    $that.$assert(128, r.loader == t), r.loader = null, r.status =     $that._cache.STATUS_AVAILABLE), t.$dispose(), t = n = r = i = null;
}})();