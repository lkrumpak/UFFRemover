(function(){{
    // Piggyback on a donor event to simulate a different one.
    // Fake originalEvent to avoid donor's stopPropagation, but if the
    // simulated event prevents default then we do the same on the donor.
    var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true,
        originalEvent: {}
    });
    if (bubble) {
        jQuery.event.trigger(e, null, elem);
    } else {
        jQuery.event.dispatch.call(elem, e);
    }
    if (e.isDefaultPrevented()) {
        event.preventDefault();
    }
}})();