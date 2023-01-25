(function(){{
    var n =     $that._callbacks['' + e];
    n && (delete    $that._cancelIds['' + n.cancelId],     $that._numberOfCallbacks--, delete    $that._callbacks['' + e], t || (n.fn = null, n.scope = null, n.onerror = null, n.onerrorScope = null));
}})();