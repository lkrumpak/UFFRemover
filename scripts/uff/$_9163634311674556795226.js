(function(){{
    if (type !== false) {
        type = type || 'fx';
    }
    return    $that.each(function () {
        var index, data = jQuery._data(this), queue = data[type + 'queue'], hooks = data[type + 'queueHooks'], timers = jQuery.timers, length = queue ? queue.length : 0;
        // enable finishing flag on private data
        data.finish = true;
        // empty the queue first
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
        }
        // look for any active animations, and finish them
        for (index = timers.length; index--;) {
            if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
            }
        }
        // look for any animations in the old queue and finish them
        for (index = 0; index < length; index++) {
            if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
            }
        }
        // turn off finishing flag
        delete data.finish;
    });
}})();