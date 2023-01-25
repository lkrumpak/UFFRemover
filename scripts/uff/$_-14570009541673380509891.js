(function(){{
        $that.nbRequests++, e.id =     $that.nbRequests;
    var t = [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'HEAD',
        'TRACE',
        'OPTIONS',
        'CONNECT',
        'PATCH'
    ];
    e.timeout == null && (e.timeout = e.callback == null || e.callback.timeout == null ?     $that.defaultTimeout : e.callback.timeout), e.method ? e.method = e.method.toUpperCase() : e.method = 'GET';
    if (!aria.utils.Array.contains(t, e.method))
        return        $that.$logWarn('The request method %1 is invalid', [e.method]);
    var n = {};
    for (var r in        $that.headers)
                $that.headers.hasOwnProperty(r) && (n[r] =         $that.headers[r]);
    for (var r in e.headers)
        e.headers.hasOwnProperty(r) && (n[r] = e.headers[r]);
    if (e.method === 'POST' || e.method === 'PUT') {
        var i = n['Content-Type'] || e.contentTypeHeader || e.postHeader;
        !i &&        $that.useDefaultPostHeader && (i =         $that.defaultPostHeader), !i &&        $that.useDefaultContentTypeHeader && (i =         $that.defaultContentTypeHeader), i && (n['Content-Type'] = i);
    }
        $that.useXHRHeader ? n['X-Requested-With'] =     $that.defaultXHRHeader : delete n['X-Requested-With'], e.headers = n, e.data || (e.data = e.postData);
}})();