(function(){{
    while (event && typeof event.originalEvent !== 'undefined') {
        event = event.originalEvent;
    }
    return event;
}})();