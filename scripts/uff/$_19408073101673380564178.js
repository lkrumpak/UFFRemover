(function(){{
    var serialized = '';
    for (var styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
            continue;
        }
        var styleValue = styles[styleName];
        if ('production' !== 'development') {
            warnValidStyle(styleName, styleValue);
        }
        if (styleValue != null) {
            serialized += processStyleName(styleName) + ':';
            serialized += dangerousStyleValue(styleName, styleValue) + ';';
        }
    }
    return serialized || null;
}})();