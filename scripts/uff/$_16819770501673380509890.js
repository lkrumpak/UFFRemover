(function(){{
    var r = aria.core.IO, i =         $that;
    r._poll[e] = setInterval(function () {
        t && t.readyState === 4 && (aria.core.IO.clearTimeout(e), clearInterval(r._poll[e]), delete r._poll[e], i._handleTransactionResponse(e, t, n));
    },     $that._pollingInterval);
}})();