(function(){{
    if (computed) {
        computed = curCSS(elem, prop);
        // if curCSS returns percentage, fallback to offset
        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + 'px' : computed;
    }
}})();