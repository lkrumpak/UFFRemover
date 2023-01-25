(function(){{
    // Support: Firefox 20+
    // Firefox doesn't alert if the returnValue field is not set.
    if (event.result !== undefined && event.originalEvent) {
        event.originalEvent.returnValue = event.result;
    }
}})();