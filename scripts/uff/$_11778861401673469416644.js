(function(){{
    var easing, duration, animation, from;
    if (keypath !== null) {
        from = root.get(keypath);
    }
    animations.abort(keypath, root);
    if (isEqual(from, to)) {
        if (options.complete) {
            options.complete(1, options.to);
        }
        return noAnimation;
    }
    if (options.easing) {
        if (typeof options.easing === 'function') {
            easing = options.easing;
        } else {
            if (root.easing && root.easing[options.easing]) {
                easing = root.easing[options.easing];
            } else {
                easing = easingRegistry[options.easing];
            }
        }
        if (typeof easing !== 'function') {
            easing = null;
        }
    }
    duration = options.duration === undefined ? 400 : options.duration;
    animation = new Animation({
        keypath: keypath,
        from: from,
        to: to,
        root: root,
        duration: duration,
        easing: easing,
        step: options.step,
        complete: options.complete
    });
    animations.add(animation);
    root._animations[root._animations.length] = animation;
    return animation;
}})();