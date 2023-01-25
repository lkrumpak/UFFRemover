(function(){{
    n || (n = {}), !t && e && (t =     $that.pendingRequests[e.reqId]),     $that.clearTimeout(t.id),     $that._normalizeResponse(e, t, n), t.res = n, t.endDownload = new Date().getTime(), t.downloadTime = t.endDownload - t.beginDownload, t.responseSize = n.responseText.length,     $that.trafficDown += t.responseSize,     $that.$raiseEvent({
        name: 'response',
        req: t
    }), delete    $that.pendingRequests[t.id], aria.core.IOFiltersMgr ? aria.core.IOFiltersMgr.callFiltersOnResponse(t, {
        fn:         $that._afterResponseFilters,
        scope:         $that,
        args: t
    }) :     $that._afterResponseFilters(null, t);
}})();