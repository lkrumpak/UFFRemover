(function(){{
    var idedEvents =         $that.__listenToEvents, iterIdedEvents = idedEvents, i = 0;
    if (!idedEvents) {
        return        $that;
    }
    if (other) {
        var othercid = can.cid(other);
        (iterIdedEvents = {})[othercid] = idedEvents[othercid];
        // you might be trying to listen to something that is not there
        if (!idedEvents[othercid]) {
            return            $that;
        }
    }
    for (var cid in iterIdedEvents) {
        var othersEvents = iterIdedEvents[cid], eventsEvents;
        other = idedEvents[cid].obj;
        if (!event) {
            eventsEvents = othersEvents.events;
        } else {
            (eventsEvents = {})[event] = othersEvents.events[event];
        }
        for (var eventName in eventsEvents) {
            var handlers = eventsEvents[eventName] || [];
            i = 0;
            while (i < handlers.length) {
                if (handler && handler === handlers[i] || !handler) {
                    can.unbind.call(other, eventName, handlers[i]);
                    handlers.splice(i, 1);
                } else {
                    i++;
                }
            }
            // no more handlers?
            if (!handlers.length) {
                delete othersEvents.events[eventName];
            }
        }
        if (can.isEmptyObject(othersEvents.events)) {
            delete idedEvents[cid];
        }
    }
    return    $that;
}})();