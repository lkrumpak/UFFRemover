(function(){{
    // Only need this for delegated form submit events
    if (jQuery.nodeName(        $that, 'form')) {
        return false;
    }
    // Lazy-add a submit handler when a descendant form may potentially be submitted
    jQuery.event.add(    $that, 'click._submit keypress._submit', function (e) {
        // Node name check avoids a VML-related crash in IE (#9807)
        var elem = e.target, form = jQuery.nodeName(elem, 'input') || jQuery.nodeName(elem, 'button') ? elem.form : undefined;
        if (form && !jQuery._data(form, 'submitBubbles')) {
            jQuery.event.add(form, 'submit._submit', function (event) {
                event._submit_bubble = true;
            });
            jQuery._data(form, 'submitBubbles', true);
        }
    });    // return undefined since we don't need an event listener
}})();