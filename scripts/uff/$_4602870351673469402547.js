(function(){{
    // Use step hook for back compat.
    // Use cssHook if its there.
    // Use .style if available and use plain properties where available.
    if (jQuery.fx.step[tween.prop]) {
        jQuery.fx.step[tween.prop](tween);
    } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
    } else {
        tween.elem[tween.prop] = tween.now;
    }
}})();