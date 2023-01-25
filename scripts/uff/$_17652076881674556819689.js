(function(){{
    if (!code) {
        code = name;
        name = defaultName;
    }
    if (name) {
        var map = cache.get(name);
        if (map) {
            return map.get(code);
        }
    }
    return null;
}})();