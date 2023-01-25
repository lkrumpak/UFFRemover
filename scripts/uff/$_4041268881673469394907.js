(function(){{
    // If form was submitted by the user, bubble the event up the tree
    if (event._submit_bubble) {
        delete event._submit_bubble;
        if (            $that.parentNode && !event.isTrigger) {
            jQuery.event.simulate('submit',             $that.parentNode, event, true);
        }
    }
}})();