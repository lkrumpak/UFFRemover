(function(){{
    var val, num, hooks, origName = jQuery.camelCase(name);
    // Make sure that we're working with the right name
    name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
    // Try prefixed name followed by the unprefixed name
    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
    // If a hook was provided get the computed value from there
    if (hooks && 'get' in hooks) {
        val = hooks.get(elem, true, extra);
    }
    // Otherwise, if a way to get the computed value exists, use that
    if (val === undefined) {
        val = curCSS(elem, name, styles);
    }
    // Convert "normal" to computed value
    if (val === 'normal' && name in cssNormalTransform) {
        val = cssNormalTransform[name];
    }
    // Make numeric if forced or a qualifier was provided and val looks numeric
    if (extra === '' || extra) {
        num = parseFloat(val);
        return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
    }
    return val;
}})();