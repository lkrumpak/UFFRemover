(function(){{
    var t =     $that.pendingRequests[e];
    if (t)
        return delete        $that.pendingRequests[e],         $that.asyncRequest(t);
}})();