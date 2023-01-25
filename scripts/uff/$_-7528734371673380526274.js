(function(){{
    var eased, hooks = Tween.propHooks[        $that.prop];
    if (        $that.options.duration) {
                $that.pos = eased = jQuery.easing[        $that.easing](percent,         $that.options.duration * percent, 0, 1,         $that.options.duration);
    } else {
                $that.pos = eased = percent;
    }
        $that.now = (    $that.end -    $that.start) * eased +    $that.start;
    if (        $that.options.step) {
                $that.options.step.call(        $that.elem,         $that.now,         $that);
    }
    if (hooks && hooks.set) {
        hooks.set(        $that);
    } else {
        Tween.propHooks._default.set(        $that);
    }
    return    $that;
}})();