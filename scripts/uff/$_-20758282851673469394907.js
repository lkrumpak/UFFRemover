(function(){{
    var e =     $that.originalEvent;
        $that.isPropagationStopped = returnTrue;
    if (!e) {
        return;
    }
    // If stopPropagation exists, run it on the original event
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    // Support: IE
    // Set the cancelBubble property of the original event to true
    e.cancelBubble = true;
}})();