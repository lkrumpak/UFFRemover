(function(){{
    // If the event is not supported natively, return false so that
    // jQuery will unbind the event using DOM methods.
    if ($.support.orientation && !$.event.special.orientationchange.disabled) {
        return false;
    }
    // Because the orientationchange event doesn't exist, unbind the
    // resize event handler.
    win.unbind('throttledresize', handler);
}})();