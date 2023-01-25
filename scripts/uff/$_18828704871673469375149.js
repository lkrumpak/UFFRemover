(function(){{
    if (!e)
        return !1;
    var r = e.redId || e, i =         $that.pendingRequests[r];
        $that.clearTimeout(r);
    var s = !1;
    if (e.getStatus) {
        var o = e.getStatus;
        s = o.fn.apply(o.scope, o.args);
    }
    i && (s = !0, e === r ? e = { transaction: r } : e.transaction = r);
    if (s === !0) {
                $that.$raiseEvent({
            name: 'abortEvent',
            o: e,
            req: i
        });
        var u = {
            transaction: i.id,
            req: i,
            status: n ?             $that.COMM_CODE :             $that.ABORT_CODE,
            statusText: n ?             $that.TIMEOUT_ERROR :             $that.ABORT_ERROR
        };
                $that._handleResponse(!0, i, u);
    }
    return s;
}})();