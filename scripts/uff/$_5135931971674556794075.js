(function(){{
    if (!        $that._events)
        return        $that;
        $that._events = eventsApi(offApi,     $that._events, name, callback, {
        context: context,
        listeners:         $that._listeners
    });
    return    $that;
}})();