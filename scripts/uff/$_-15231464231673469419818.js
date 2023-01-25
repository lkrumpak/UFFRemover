(function(){{
    var touches = getNativeEvent(event).touches, target, flags;
    if (touches && touches.length === 1) {
        target = event.target;
        flags = getVirtualBindingFlags(target);
        if (flags.hasVirtualBinding) {
            lastTouchID = nextTouchID++;
            $.data(target, touchTargetPropertyName, lastTouchID);
            clearResetTimer();
            disableMouseBindings();
            didScroll = false;
            var t = getNativeEvent(event).touches[0];
            startX = t.pageX;
            startY = t.pageY;
            triggerVirtualEvent('vmouseover', event, flags);
            triggerVirtualEvent('vmousedown', event, flags);
        }
    }
}})();