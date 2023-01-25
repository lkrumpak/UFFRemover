(function(){{
    return    $that.__normalizeRequest(e),     $that.pendingRequests[e.id] = e, aria.core.IOFiltersMgr ? aria.core.IOFiltersMgr.callFiltersOnRequest(e, {
        fn:         $that._afterRequestFilters,
        scope:         $that,
        args: e
    }) :     $that._afterRequestFilters(null, e), e.id;
}})();