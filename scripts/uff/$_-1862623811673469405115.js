(function(){{
    if (!        $that._events)
        return        $that;
    var args = slice.call(arguments, 1);
    if (!eventsApi(        $that, 'trigger', name, args))
        return        $that;
    var events =     $that._events[name];
    var allEvents =     $that._events.all;
    if (events)
        triggerEvents(events, args);
    if (allEvents)
        triggerEvents(allEvents, arguments);
    return    $that;
}})();