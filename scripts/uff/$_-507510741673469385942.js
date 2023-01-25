(function(){{
    if (typeof eventName === 'undefined') {
        throw new Error(1120);
    }
    key = key || 'global';
    handler = handler || eventName;
    if (        $that._handlers.hasOwnProperty(eventName) &&        $that._handlers[eventName].hasOwnProperty(key)) {
        var handlers =         $that._handlers[eventName][key];
        for (var i in handlers) {
            var config = handlers[i];
            if (config.handler === handler) {
                handlers.splice(i, 1);
                break;
            }
        }
    }
    return    $that;
}})();