(function(){{
    if (xhrOptions.background !== true)
        m.startComputation();
    var deferred = new Deferred();
    var isJSONP = xhrOptions.dataType && xhrOptions.dataType.toLowerCase() === 'jsonp';
    var serialize = xhrOptions.serialize = isJSONP ? identity : xhrOptions.serialize || JSON.stringify;
    var deserialize = xhrOptions.deserialize = isJSONP ? identity : xhrOptions.deserialize || JSON.parse;
    var extract = isJSONP ? function (jsonp) {
        return jsonp.responseText;
    } : xhrOptions.extract || function (xhr) {
        return xhr.responseText.length === 0 && deserialize === JSON.parse ? null : xhr.responseText;
    };
    xhrOptions.method = (xhrOptions.method || 'GET').toUpperCase();
    xhrOptions.url = parameterizeUrl(xhrOptions.url, xhrOptions.data);
    xhrOptions = bindData(xhrOptions, xhrOptions.data, serialize);
    xhrOptions.onload = xhrOptions.onerror = function (e) {
        try {
            e = e || event;
            var unwrap = (e.type === 'load' ? xhrOptions.unwrapSuccess : xhrOptions.unwrapError) || identity;
            var response = unwrap(deserialize(extract(e.target, xhrOptions)), e.target);
            if (e.type === 'load') {
                if (type.call(response) === ARRAY && xhrOptions.type) {
                    for (var i = 0; i < response.length; i++)
                        response[i] = new xhrOptions.type(response[i]);
                } else if (xhrOptions.type)
                    response = new xhrOptions.type(response);
            }
            deferred[e.type === 'load' ? 'resolve' : 'reject'](response);
        } catch (e) {
            m.deferred.onerror(e);
            deferred.reject(e);
        }
        if (xhrOptions.background !== true)
            m.endComputation();
    };
    ajax(xhrOptions);
    deferred.promise = propify(deferred.promise, xhrOptions.initialValue);
    return deferred.promise;
}})();