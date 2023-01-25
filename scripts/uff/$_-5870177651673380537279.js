(function(){{
    var callback;
    // Cross domain only allowed if supported through XMLHttpRequest
    if (support.cors || xhrSupported && !options.crossDomain) {
        return {
            send: function (headers, complete) {
                var i, xhr = options.xhr(), id = ++xhrId;
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                // Apply custom fields if provided
                if (options.xhrFields) {
                    for (i in options.xhrFields) {
                        xhr[i] = options.xhrFields[i];
                    }
                }
                // Override mime type if needed
                if (options.mimeType && xhr.overrideMimeType) {
                    xhr.overrideMimeType(options.mimeType);
                }
                // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                if (!options.crossDomain && !headers['X-Requested-With']) {
                    headers['X-Requested-With'] = 'XMLHttpRequest';
                }
                // Set headers
                for (i in headers) {
                    xhr.setRequestHeader(i, headers[i]);
                }
                // Callback
                callback = function (type) {
                    return function () {
                        if (callback) {
                            delete xhrCallbacks[id];
                            callback = xhr.onload = xhr.onerror = null;
                            if (type === 'abort') {
                                xhr.abort();
                            } else if (type === 'error') {
                                complete(// file: protocol always yields status 0; see #8605, #14207
                                xhr.status, xhr.statusText);
                            } else {
                                complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE9
                                // Accessing binary-data responseText throws an exception
                                // (#11426)
                                typeof xhr.responseText === 'string' ? { text: xhr.responseText } : undefined, xhr.getAllResponseHeaders());
                            }
                        }
                    };
                };
                // Listen to events
                xhr.onload = callback();
                xhr.onerror = callback('error');
                // Create the abort callback
                callback = xhrCallbacks[id] = callback('abort');
                try {
                    // Do send the request (this may raise an exception)
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    // #14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) {
                        throw e;
                    }
                }
            },
            abort: function () {
                if (callback) {
                    callback();
                }
            }
        };
    }
}})();