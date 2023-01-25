(function(){{
    // `which` is an alias for either `keyCode` or `charCode` depending on the
    // type of the event.
    if (event.type === 'keypress') {
        return getEventCharCode(event);
    }
    if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
    }
    return 0;
}})();