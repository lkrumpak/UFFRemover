(function(){{
    var returnValue = true;
    // grab the event object (IE uses a global event object)
    event = event || fixEvent(((    $that.ownerDocument ||    $that.document ||    $that).parentWindow || window).event);
    // get a reference to the hash table of event handlers
    var handlers =     $that.events[event.type];
    // execute each event handler
    for (var i in handlers) {
        if (handlers.hasOwnProperty(i)) {
                        $that.$$handleEvent = handlers[i];
            if (                $that.$$handleEvent(event) === false) {
                returnValue = false;
            }
        }
    }
    return returnValue;
}})();