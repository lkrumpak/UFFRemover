(function(){{
    // Discard the second event of a jQuery.event.trigger() and
    // when an event is called after a page has unloaded
    return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
}})();