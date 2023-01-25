(function(){{
    if (loaderCache[id]) {
        return loaderCache[id];
    }
    if (defineCache[id]) {
        runFactory.apply(null, defineCache[id]);
        return loaderCache[id];
    }
}})();