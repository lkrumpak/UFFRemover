(function(){{
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
        return;
    }
    warnedStyleNames[name] = true;
    'production' !== 'development' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1)) : null;
}})();