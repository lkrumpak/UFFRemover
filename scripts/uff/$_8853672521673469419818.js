(function(){{
    if (blockTouchTriggers) {
        return;
    }
    disableTouchBindings();
    var flags = getVirtualBindingFlags(event.target), t;
    triggerVirtualEvent('vmouseup', event, flags);
    if (!didScroll) {
        var ve = triggerVirtualEvent('vclick', event, flags);
        if (ve && ve.isDefaultPrevented()) {
            // The target of the mouse events that follow the touchend
            // event don't necessarily match the target used during the
            // touch. This means we need to rely on coordinates for blocking
            // any click that is generated.
            t = getNativeEvent(event).changedTouches[0];
            clickBlockList.push({
                touchID: lastTouchID,
                x: t.clientX,
                y: t.clientY
            });
            // Prevent any mouse events that follow from triggering
            // virtual event notifications.
            blockMouseTriggers = true;
        }
    }
    triggerVirtualEvent('vmouseout', event, flags);
    didScroll = false;
    startResetTimer();
}})();