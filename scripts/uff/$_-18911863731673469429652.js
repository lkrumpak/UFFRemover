(function(){{
    var style = node.style;
    for (var styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
            continue;
        }
        if ('production' !== 'development') {
            warnValidStyle(styleName, styles[styleName]);
        }
        var styleValue = dangerousStyleValue(styleName, styles[styleName]);
        if (styleName === 'float') {
            styleName = styleFloatAccessor;
        }
        if (styleValue) {
            style[styleName] = styleValue;
        } else {
            var expansion = CSSProperty.shorthandPropertyExpansions[styleName];
            if (expansion) {
                // Shorthand property that IE8 won't like unsetting, so unset each
                // component to placate it
                for (var individualStyleName in expansion) {
                    style[individualStyleName] = '';
                }
            } else {
                style[styleName] = '';
            }
        }
    }
}})();