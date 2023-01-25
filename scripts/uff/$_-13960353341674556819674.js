(function(){{
    var calls =         $that.callbacks, list, handler, i = -1, newList, isCallback, isThisp;
    if (!type) {
        delete        $that.callbacks;
    } else if (calls) {
        if (!callback) {
            delete calls[type];
        } else {
            list = calls[type];
            if (list) {
                newList = calls[type] = [];
                while (!!(handler = list[++i])) {
                    isCallback = handler.fn === callback || handler.fn.fn === callback || handler.fn.guid && handler.fn.guid === callback.guid || handler.fn._zid && handler.fn._zid === callback._zid;
                    // Check if is Zepto proxy of callback
                    isThisp = thisp && (handler.thisp === thisp || handler.fn.thisp === thisp);
                    if (!isCallback || thisp && !isThisp) {
                        newList[newList.length] = handler;
                    }
                }
            }
        }
    }
    return    $that;
}})();