(function(){{
    var previous, cached, cacheMap, i;
    previous = wrapped.get();
    if (!isEqual(previous, value)) {
        if (wrapped.reset(value) === false) {
            return false;
        }
    }
    value = wrapped.get();
    cached = ractive._cache[keypath];
    if (!isEqual(cached, value)) {
        ractive._cache[keypath] = value;
        cacheMap = ractive._cacheMap[keypath];
        if (cacheMap) {
            i = cacheMap.length;
            while (i--) {
                clearCache(ractive, cacheMap[i]);
            }
        }
        changes[changes.length] = keypath;
    }
}})();