(function(){{
    var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function () {
            // don't match elem in the :animated selector
            delete tick.elem;
        }), tick = function () {
            if (stopped) {
                return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
                temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for (; index < length; index++) {
                animation.tweens[index].run(percent);
            }
            deferred.notifyWith(elem, [
                animation,
                percent,
                remaining
            ]);
            if (percent < 1 && length) {
                return remaining;
            } else {
                deferred.resolveWith(elem, [animation]);
                return false;
            }
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, { specialEasing: {} }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function (prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function (gotoEnd) {
                var index = 0,
                    // if we are going to the end, we want to run all the tweens
                    // otherwise we skip this part
                    length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    return this;
                }
                stopped = true;
                for (; index < length; index++) {
                    animation.tweens[index].run(1);
                }
                // resolve when we played the last frame
                // otherwise, reject
                if (gotoEnd) {
                    deferred.resolveWith(elem, [
                        animation,
                        gotoEnd
                    ]);
                } else {
                    deferred.rejectWith(elem, [
                        animation,
                        gotoEnd
                    ]);
                }
                return this;
            }
        }), props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
        result = animationPrefilters[index].call(animation, elem, props, animation.opts);
        if (result) {
            return result;
        }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
        animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
        elem: elem,
        anim: animation,
        queue: animation.opts.queue
    }));
    // attach callbacks from options
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
}})();