(function(){{
    var originalType = event.type;
    event.type = eventType;
    $.event.dispatch.call(obj, event);
    event.type = originalType;
}})();