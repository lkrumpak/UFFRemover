(function(){{
    var result;
    if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
        return tween.elem[tween.prop];
    }
    // passing an empty string as a 3rd parameter to .css will automatically
    // attempt a parseFloat and fallback to a string if the parse fails
    // so, simple values such as "10px" are parsed to Float.
    // complex values such as "rotate(1rad)" are returned as is.
    result = jQuery.css(tween.elem, tween.prop, '');
    // Empty strings, null, undefined and "auto" are converted to 0.
    return !result || result === 'auto' ? 0 : result;
}})();