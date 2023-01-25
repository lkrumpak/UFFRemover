(function(){{
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(    $that.stopListening,     $that, obj));
    return    $that.listenTo(obj, events);
}})();