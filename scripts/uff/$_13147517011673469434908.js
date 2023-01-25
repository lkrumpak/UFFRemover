(function(){{
    // Don't set styles on text and comment nodes
    if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
    }
    // Make sure that we're working with the right name
    var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
    name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
    // Gets hook for the prefixed version, then unprefixed version
    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
    // Check if we're setting a value
    if (value !== undefined) {
        type = typeof value;
        // Convert "+=" or "-=" to relative numbers (#7345)
        if (type === 'string' && (ret = rrelNum.exec(value))) {
            value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
            // Fixes bug #9237
            type = 'number';
        }
        // Make sure that null and NaN values aren't set (#7116)
        if (value == null || value !== value) {
            return;
        }
        // If a number, add 'px' to the (except for certain CSS properties)
        if (type === 'number' && !jQuery.cssNumber[origName]) {
            value += 'px';
        }
        // Support: IE9-11+
        // background-* props affect original clone's values
        if (!support.clearCloneStyle && value === '' && name.indexOf('background') === 0) {
            style[name] = 'inherit';
        }
        // If a hook was provided, use that value, otherwise just set the specified value
        if (!hooks || !('set' in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
            style[name] = value;
        }
    } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && 'get' in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
            return ret;
        }
        // Otherwise just get the value from the style object
        return style[name];
    }
}})();