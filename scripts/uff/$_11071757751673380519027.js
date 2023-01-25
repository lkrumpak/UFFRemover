(function(){{
    var tween =         $that.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value), unit = parts && parts[3] || (jQuery.cssNumber[prop] ? '' : 'px'),
        // Starting value computation is required for potential unit mismatches
        start = (jQuery.cssNumber[prop] || unit !== 'px' && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale = 1, maxIterations = 20;
    if (start && start[3] !== unit) {
        // Trust units reported by jQuery.css
        unit = unit || start[3];
        // Make sure we update the tween properties later on
        parts = parts || [];
        // Iteratively approximate from a nonzero starting point
        start = +target || 1;
        do {
            // If previous iteration zeroed out, double until we get *something*.
            // Use string for doubling so we don't accidentally see scale as unchanged below
            scale = scale || '.5';
            // Adjust and apply
            start = start / scale;
            jQuery.style(tween.elem, prop, start + unit);    // Update scale, tolerating zero or NaN from tween.cur(),
                                                             // break the loop if scale is unchanged or perfect, or if we've just had enough
        } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
    }
    // Update tween properties
    if (parts) {
        start = tween.start = +start || +target || 0;
        tween.unit = unit;
        // If a +=/-= token was provided, we're doing a relative animation
        tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
    }
    return tween;
}})();