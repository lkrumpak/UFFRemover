(function(){{
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
        return;
    }
    warnedStyleNames[name] = true;
    'production' !== 'development' ? warning(false, 'Unsupported style property %s. Did you mean %s?', name, camelizeStyleName(name)) : null;
}})();