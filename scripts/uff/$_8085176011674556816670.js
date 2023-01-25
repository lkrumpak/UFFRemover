(function(){{
    var computedStyle, styles, i, prop, value;
    computedStyle = window.getComputedStyle(    $that.node);
    if (typeof props === 'string') {
        value = computedStyle[prefix(props)];
        if (value === '0px') {
            value = 0;
        }
        return value;
    }
    if (!isArray(props)) {
        throw new Error('Transition#getStyle must be passed a string, or an array of strings representing CSS properties');
    }
    styles = {};
    i = props.length;
    while (i--) {
        prop = props[i];
        value = computedStyle[prefix(prop)];
        if (value === '0px') {
            value = 0;
        }
        styles[prop] = value;
    }
    return styles;
}})();