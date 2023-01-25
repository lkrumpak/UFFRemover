(function(){{
    var eventName;
    for (eventName in eventsDescriptor) {
        if (eventsDescriptor.hasOwnProperty(eventName)) {
            propagateEvent(component.instance, component.root, eventName, eventsDescriptor[eventName]);
        }
    }
}})();