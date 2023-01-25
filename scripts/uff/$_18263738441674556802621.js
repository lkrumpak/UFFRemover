(function(){{
    var styles = extra && getStyles(elem);
    return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, 'boxSizing', false, styles) === 'border-box', styles) : 0);
}})();