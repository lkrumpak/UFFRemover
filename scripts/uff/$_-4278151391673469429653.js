(function(){{
    if (!activeElement) {
        return;
    }
    activeElement.detachEvent('onchange', manualDispatchChangeEvent);
    activeElement = null;
    activeElementID = null;
}})();