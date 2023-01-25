(function(){{
    if (endEvents.length === 0) {
        return;
    }
    endEvents.forEach(function (endEvent) {
        removeEventListener(node, endEvent, eventListener);
    });
}})();