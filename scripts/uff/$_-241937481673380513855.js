(function(){{
    if (!cache.hasOwnProperty(string)) {
        cache[string] = callback.call(        $that, string);
    }
    return cache[string];
}})();