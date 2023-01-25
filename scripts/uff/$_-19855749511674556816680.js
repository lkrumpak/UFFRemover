(function(){{
    var key;
    if (isObject(partial)) {
        registry[name] = partial.main;
        for (key in partial.partials) {
            if (partial.partials.hasOwnProperty(key)) {
                registry[key] = partial.partials[key];
            }
        }
    } else {
        registry[name] = partial;
    }
}})();