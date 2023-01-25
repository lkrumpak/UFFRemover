(function(){{
    var map = name;
    if (typeof map === 'string') {
        map = cache.get(name);
    }
    cache.set('default', map);
}})();