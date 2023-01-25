(function(){{
        $that._cache || (    $that._cache = aria.core.Cache),     $that.$assert(1,     $that._cache);
    var t =     $that._cache.getItem('classes', e, !0);
    t.status =     $that._cache.STATUS_ERROR, t.loader && t.loader.notifyLoadError();
}})();