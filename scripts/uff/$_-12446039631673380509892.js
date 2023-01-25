(function(){{
    var n = t.res, r = t.callback;
    if (!r)
                $that.$logError(        $that.MISSING_IO_CALLBACK, [n.url]);
    else if (n.error != null)
        if (r.onerror == null)
                        $that.$logError(            $that.IO_REQUEST_FAILED, [
                n.url,
                n.error
            ]);
        else {
            var i = r.onerrorScope;
            i || (i = r.scope);
            try {
                r.onerror.call(i, n, r.args);
            } catch (s) {
                                $that.$logError(                $that.IO_CALLBACK_ERROR, [n.url], s);
            }
        }
    else
        t.expectedResponseType &&        $that._jsonTextConverter(n, t.expectedResponseType), r.fn.call(r.scope, n, r.args);
    t = r = null;
}})();