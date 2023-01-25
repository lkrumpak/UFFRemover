(function(){{
    var retain, ev, events, names, i, l, j, k;
    if (!        $that._events || !eventsApi(        $that, 'off', name, [
            callback,
            context
        ]))
        return        $that;
    if (!name && !callback && !context) {
                $that._events = void 0;
        return        $that;
    }
    names = name ? [name] : Object.keys(    $that._events);
    for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events =             $that._events[name]) {
                        $that._events[name] = retain = [];
            if (callback || context) {
                for (j = 0, k = events.length; j < k; j++) {
                    ev = events[j];
                    if (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) {
                        retain.push(ev);
                    }
                }
            }
            if (!retain.length)
                delete                $that._events[name];
        }
    }
    return    $that;
}})();