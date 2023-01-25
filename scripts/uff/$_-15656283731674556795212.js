(function(){{
    if (event[jQuery.expando]) {
        return event;
    }
    // Create a writable copy of the event object and normalize some properties
    var i, prop, copy, type = event.type, originalEvent = event, fixHook =         $that.fixHooks[type];
    if (!fixHook) {
                $that.fixHooks[type] = fixHook = rmouseEvent.test(type) ?         $that.mouseHooks : rkeyEvent.test(type) ?         $that.keyHooks : {};
    }
    copy = fixHook.props ?     $that.props.concat(fixHook.props) :     $that.props;
    event = new jQuery.Event(originalEvent);
    i = copy.length;
    while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
    }
    // Support: IE<9
    // Fix target property (#1925)
    if (!event.target) {
        event.target = originalEvent.srcElement || document;
    }
    // Support: Chrome 23+, Safari?
    // Target should not be a text node (#504, #13143)
    if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
    }
    // Support: IE<9
    // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
    event.metaKey = !!event.metaKey;
    return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
}})();