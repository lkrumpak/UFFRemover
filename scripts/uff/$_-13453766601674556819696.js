(function(){{
    var type, callback, dotIndex;
    if (        $that.eventMap &&        $that.eventMap.model &&        $that.model &&        $that.model instanceof EventDispatcher) {
        for (type in            $that.eventMap.model) {
            callback =             $that.eventMap.model[type];
            if (typeof callback === 'object') {
                callback = callback.on;
            }
            dotIndex = type.indexOf('.');
            if (dotIndex !== -1) {
                type = type.substr(0, dotIndex);
            }
                        $that.model.off(type, callback);
        }
    }
}})();