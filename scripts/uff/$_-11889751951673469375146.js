(function(){{
    var n =     $that._getConnection();
    n.open(e.method, e.url, !0);
    for (var r in e.headers)
        e.headers.hasOwnProperty(r) && n.setRequestHeader(r, e.headers[r]);
    aria.core.IO.setTimeout(e.id, e.timeout, {
        fn:         $that.onAbort,
        scope:         $that,
        args: [
            e.id,
            n
        ]
    }),     $that._handleReadyState(e.id, n, t), n.send(e.data || null);
}})();