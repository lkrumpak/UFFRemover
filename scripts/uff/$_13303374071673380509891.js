(function(){{
    var n = t.id;
        $that.$raiseEvent({
        name: 'request',
        req: t
    }), t.beginDownload = new Date().getTime(), t.method == 'POST' && t.postData ? t.requestSize = t.postData.length : t.requestSize = t.method != 'POST' && t.method != 'PUT' || !t.data ? 0 : t.data.length;
    try {
                $that._prepareTransport(t);
    } catch (r) {
        aria.core.Timer.addCallback({
            fn:             $that._handleResponse,
            scope:             $that,
            delay: 10,
            args: {
                isInternalError: !0,
                reqId: t.id,
                errDescription: r.description || r.message || r.name + r.number
            }
        });
    }
    return t.id;
}})();