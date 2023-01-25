(function(){{
    var e =     $that.originalEvent;
        $that.isDefaultPrevented = returnTrue;
    if (!e) {
        return;
    }
    // If preventDefault exists, run it on the original event
    if (e.preventDefault) {
        e.preventDefault();    // Support: IE
                               // Otherwise set the returnValue property of the original event to false
    } else {
        e.returnValue = false;
    }
}})();