(function(){{
    var t = e.req, n = t.id, r = t.method, i = e.transport.instance || Aria.getClassRef(e.transport.classpath), s = {
            fn:             $that._handleResponse,
            scope:             $that,
            args: t
        };
    if (!i.isReady)
        return i.init(n, s);
        $that.trafficUp += t.requestSize, i.request(t, s);
}})();