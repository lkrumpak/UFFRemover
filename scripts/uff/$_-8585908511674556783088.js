(function(){{
    if (object.dispatchEvent) {
        object.dispatchEvent(event);
    } else if (object.fireEvent) {
        object.fireEvent(event.type, event);
    }
}})();