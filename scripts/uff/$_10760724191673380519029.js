(function(){{
    jQuery.timers.push(timer);
    if (timer()) {
        jQuery.fx.start();
    } else {
        jQuery.timers.pop();
    }
}})();