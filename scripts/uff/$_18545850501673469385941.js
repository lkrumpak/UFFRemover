(function(){{
    if (typeof key === 'undefined') {
        throw new Error(1070);
    }
    return    $that._retrieveFromCacheOrCreate(key, true);
}})();