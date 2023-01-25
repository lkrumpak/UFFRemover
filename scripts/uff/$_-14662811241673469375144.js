(function(){{
    var t = '' + e, n =         $that._callbacks[t];
    if (n) {
                $that._deleteCallback(t, !0);
        try {
            n.fn.call(n.scope, n.args);
        } catch (r) {
            if (n.onerror != null && typeof (n.onerror == 'function'))
                try {
                    var i = n.onerrorScope != null ? n.onerrorScope : n.scope;
                    n.onerror.call(i, r, n);
                } catch (s) {
                                        $that.$logError(                    $that.TIMER_CB_ERROR_ERROR, [t], s);
                }
            else
                                $that.$logError(                $that.TIMER_CB_ERROR, [t], r);
        }
        n.fn = null, n.scope = null, n.onerror = null, n.onerrorScope = null;
    }
}})();