(function(){{
    var k, animation, animations, easing, duration, step, complete, makeValueCollector, currentValues, collectValue, dummy, dummyOptions;
    if (typeof keypath === 'object') {
        options = to || {};
        easing = options.easing;
        duration = options.duration;
        animations = [];
        step = options.step;
        complete = options.complete;
        if (step || complete) {
            currentValues = {};
            options.step = null;
            options.complete = null;
            makeValueCollector = function (keypath) {
                return function (t, value) {
                    currentValues[keypath] = value;
                };
            };
        }
        for (k in keypath) {
            if (keypath.hasOwnProperty(k)) {
                if (step || complete) {
                    collectValue = makeValueCollector(k);
                    options = {
                        easing: easing,
                        duration: duration
                    };
                    if (step) {
                        options.step = collectValue;
                    }
                    if (complete) {
                        options.complete = collectValue;
                    }
                }
                animations[animations.length] = animate(                $that, k, keypath[k], options);
            }
        }
        if (step || complete) {
            dummyOptions = {
                easing: easing,
                duration: duration
            };
            if (step) {
                dummyOptions.step = function (t) {
                    step(t, currentValues);
                };
            }
            if (complete) {
                dummyOptions.complete = function (t) {
                    complete(t, currentValues);
                };
            }
            animations[animations.length] = dummy = animate(            $that, null, null, dummyOptions);
        }
        return {
            stop: function () {
                while (animations.length) {
                    animations.pop().stop();
                }
                if (dummy) {
                    dummy.stop();
                }
            }
        };
    }
    options = options || {};
    animation = animate(    $that, keypath, to, options);
    return {
        stop: function () {
            animation.stop();
        }
    };
}})();