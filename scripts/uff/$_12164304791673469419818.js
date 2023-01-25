(function(){{
    clearResetTimer();
    resetTimerID = setTimeout(function () {
        resetTimerID = 0;
        enableMouseBindings();
    }, $.vmouse.resetTimerDuration);
}})();