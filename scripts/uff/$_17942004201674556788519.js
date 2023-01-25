(function(){{
    var cacheKey = getCellCacheKey(root);
    clear(root.childNodes, cellCache[cacheKey]);
    cellCache[cacheKey] = undefined;
}})();