(function(){{
    var timer, i = 0, timers = jQuery.timers;
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