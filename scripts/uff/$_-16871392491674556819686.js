(function(){{
    if (arg === _offlineErrorCode) {
        var i = -1, callback;
        while (!!(callback = _offlineAjaxHandlers[++i])) {
            callback(arg);
        }
    }
}})();