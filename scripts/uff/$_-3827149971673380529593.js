(function(){{
    if (computed) {
        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
        // Work around by temporarily setting element display to inline-block
        return jQuery.swap(elem, { 'display': 'inline-block' }, curCSS, [
            elem,
            'marginRight'
        ]);
    }
}})();