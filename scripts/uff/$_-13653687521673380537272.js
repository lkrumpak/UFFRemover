(function(){{
    var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function () {
            // Operate on a copy of prop so per-property easing won't be lost
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            // Empty animations, or finishing resolves immediately
            if (empty || data_priv.get(this, 'finish')) {
                anim.stop(true);
            }
        };
    doAnimation.finish = doAnimation;
    return empty || optall.queue === false ?     $that.each(doAnimation) :     $that.queue(optall.queue, doAnimation);
}})();