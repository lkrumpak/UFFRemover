(function(){{
    if (endEvents.length === 0) {
        // If CSS transitions are not supported, trigger an "end animation"
        // event immediately.
        window.setTimeout(eventListener, 0);
        return;
    }
    endEvents.forEach(function (endEvent) {
        addEventListener(node, endEvent, eventListener);
    });
}})();