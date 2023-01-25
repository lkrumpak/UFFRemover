(function(){{
        $that._cache || (    $that._cache = aria.core.Cache),     $that.$assert(1,     $that._cache);
    var t =     $that._cache.getItem('classes', e, !0);
    t.status =     $that._cache.STATUS_AVAILABLE, t.loader && t.loader.notifyLoadComplete();
    var n = Aria.getClassRef(e);
    if (n) {
        var r = Aria.getClassRef(e).classDefinition;
        r && r.$css && aria.templates.CSSMgr.registerDependencies(e, r.$css);
    }
}})();