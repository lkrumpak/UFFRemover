(function(){{
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(    $that.off,     $that));
    return    $that.on(events, void 0, context);
}})();