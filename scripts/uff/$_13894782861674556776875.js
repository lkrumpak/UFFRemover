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
    // Support: Cordova 2.5 (WebKit) (#13255)
    // All events should have a target; Cordova deviceready doesn't
    if (!event.target) {
        event.target = document;
    }
    // Support: Safari 6.0+, Chrome<28
    // Target should not be a text node (#504, #13143)
    if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
    }
    return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
}})();