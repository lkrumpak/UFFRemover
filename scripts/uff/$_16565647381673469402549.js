(function(){{
    var opt = speed && typeof speed === 'object' ? jQuery.extend({}, speed) : {
        complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
        duration: speed,
        easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === 'number' ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
    // Normalize opt.queue - true/undefined/null -> "fx"
    if (opt.queue == null || opt.queue === true) {
        opt.queue = 'fx';
    }
    // Queueing
    opt.old = opt.complete;
    opt.complete = function () {
        if (jQuery.isFunction(opt.old)) {
            opt.old.call(this);
        }
        if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
        }
    };
    return opt;
}})();