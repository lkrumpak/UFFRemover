(function(){{
    var pathKey = path + '';
    path = toPath(path);
    return function (object) {
        return baseGet(object, path, pathKey);
    };
}})();