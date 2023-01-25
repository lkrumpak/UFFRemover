(function(){{
    // This transport only deals with cross domain requests
    if (s.crossDomain) {
        var script, callback;
        return {
            send: function (_, complete) {
                script = jQuery('<script>').prop({
                    async: true,
                    charset: s.scriptCharset,
                    src: s.url
                }).on('load error', callback = function (evt) {
                    script.remove();
                    callback = null;
                    if (evt) {
                        complete(evt.type === 'error' ? 404 : 200, evt.type);
                    }
                });
                document.head.appendChild(script[0]);
            },
            abort: function () {
                if (callback) {
                    callback();
                }
            }
        };
    }
}})();