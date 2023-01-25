(function(){{
        $that._cache || (    $that._cache = aria.core.Cache);
    var r =     $that._cache.getItem('files', e, !0);
    n ? r.status =     $that._cache.STATUS_ERROR : (r.value = t, r.status =     $that._cache.STATUS_AVAILABLE), r = null;
}})();