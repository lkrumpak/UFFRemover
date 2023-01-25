(function(){{
    var callbacks, callback, i = -1;
    if (!childViewEventMap[type].TView || item instanceof childViewEventMap[type].TView) {
        callbacks = item.callbacks[type] || [];
        while (!!(callback = callbacks[++i])) {
            if (callback === childViewEventMap[type].callback) {
                return;
            }
        }
        item.on(type, childViewEventMap[type].callback);
    }
}})();