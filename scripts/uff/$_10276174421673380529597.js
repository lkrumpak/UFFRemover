(function(){{
    var timer, timers = jQuery.timers, i = 0;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
        timer = timers[i];
        // Checks the timer has not already been removed
        if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
        }
    }
    if (!timers.length) {
        jQuery.fx.stop();
    }
    fxNow = undefined;
}})();