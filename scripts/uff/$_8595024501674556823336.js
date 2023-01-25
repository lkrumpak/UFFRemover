(function(){{
    activeElement = target;
    activeElementID = targetID;
    activeElement.attachEvent('onchange', manualDispatchChangeEvent);
}})();