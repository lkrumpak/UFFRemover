(function(){{
    var stopQueue = function (hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
    };
    if (typeof type !== 'string') {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
    }
    if (clearQueue && type !== false) {
                $that.queue(type || 'fx', []);
    }
    return    $that.each(function () {
        var dequeue = true, index = type != null && type + 'queueHooks', timers = jQuery.timers, data = data_priv.get(this);
        if (index) {
            if (data[index] && data[index].stop) {
                stopQueue(data[index]);
            }
        } else {
            for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                }
            }
        }
        for (index = timers.length; index--;) {
            if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
            }
        }
        // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.
        if (dequeue || !gotoEnd) {
            jQuery.dequeue(this, type);
        }
    });
}})();