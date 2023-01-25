(function(){{
    if (blockTouchTriggers) {
        return;
    }
    if (!didScroll) {
        triggerVirtualEvent('vmousecancel', event, getVirtualBindingFlags(event.target));
    }
    didScroll = true;
    startResetTimer();
}})();