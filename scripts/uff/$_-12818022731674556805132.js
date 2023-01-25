(function(){{
    if (!eventsApi(        $that, 'on', name, [
            callback,
            context
        ]) || !callback)
        return        $that;
        $that._events || (    $that._events = {});
    var events =     $that._events[name] || (    $that._events[name] = []);
    events.push({
        callback: callback,
        context: context,
        ctx: context ||        $that
    });
    return    $that;
}})();