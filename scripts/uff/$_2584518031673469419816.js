(function(){{
    if (code) {
        code = JSON.parse(code);
    }
    var map = new Translation(name, src, code);
    if (!_cache.get(map.language)) {
        _cache.set(map.language, map);
    }
    return map;
}})();