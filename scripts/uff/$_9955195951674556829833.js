(function(){{
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
        return;
    }
    warnedStyleValues[value] = true;
    'production' !== 'development' ? warning(false, 'Style property values shouldn\'t contain a semicolon. ' + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, '')) : null;
}})();