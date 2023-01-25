(function(){{
    testEl = testEl || document.createElement('div');
    prop = camelize(prop);
    if (prop !== 'filter' && prop in testEl.style) {
        return prop;
    }
    var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < prefixes.length; i++) {
        var prefixed = prefixes[i] + upper;
        if (prefixed in testEl.style) {
            return prefixed;
        }
    }
}})();