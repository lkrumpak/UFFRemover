(function(){{
    if (blockTouchTriggers) {
        return;
    }
    var t = getNativeEvent(event).touches[0], didCancel = didScroll, moveThreshold = $.vmouse.moveDistanceThreshold, flags = getVirtualBindingFlags(event.target);
    didScroll = didScroll || (Math.abs(t.pageX - startX) > moveThreshold || Math.abs(t.pageY - startY) > moveThreshold);
    if (didScroll && !didCancel) {
        triggerVirtualEvent('vmousecancel', event, flags);
    }
    triggerVirtualEvent('vmousemove', event, flags);
    startResetTimer();
}})();