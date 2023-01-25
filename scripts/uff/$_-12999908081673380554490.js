(function(){{
    // If the event is supported natively, return false so that jQuery
    // will bind to the event using DOM methods.
    if ($.support.orientation && !$.event.special.orientationchange.disabled) {
        return false;
    }
    // Get the current orientation to avoid initial double-triggering.
    last_orientation = get_orientation();
    // Because the orientationchange event doesn't exist, simulate the
    // event by testing window dimensions on resize.
    win.bind('throttledresize', handler);
}})();