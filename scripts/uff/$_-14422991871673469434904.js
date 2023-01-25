(function(){{
    var ret, target =         $that, related = event.relatedTarget, handleObj = event.handleObj;
    // For mousenter/leave call the handler if related is outside the target.
    // NB: No relatedTarget if the mouse left/entered the browser window
    if (!related || related !== target && !jQuery.contains(target, related)) {
        event.type = handleObj.origType;
        ret = handleObj.handler.apply(        $that, arguments);
        event.type = fix;
    }
    return ret;
}})();