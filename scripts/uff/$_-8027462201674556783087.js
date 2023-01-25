(function(){{
    var event;
    if (document.createEvent) {
        event = document.createEvent('Events');
        event.initEvent(eventName, false, false);
    } else if (document.createEventObject) {
        event = document.createEventObject();
    }
    return event;
}})();