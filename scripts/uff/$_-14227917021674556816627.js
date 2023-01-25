(function(){{
    var subscribers, index;
    if (!callback) {
        if (!eventName) {
            for (eventName in                $that._subs) {
                delete                $that._subs[eventName];
            }
        } else {
                        $that._subs[eventName] = [];
        }
    }
    subscribers =     $that._subs[eventName];
    if (subscribers) {
        index = subscribers.indexOf(callback);
        if (index !== -1) {
            subscribers.splice(index, 1);
        }
    }
}})();