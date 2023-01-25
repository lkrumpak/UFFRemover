(function(){{
    var index = -1, isFunc = typeof path == 'function', isProp = isKey(path), result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function (value) {
        var func = isFunc ? path : isProp && value != null ? value[path] : undefined;
        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
    });
    return result;
}})();