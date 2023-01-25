(function(){{
    return function (path) {
        return baseGet(object, toPath(path), path + '');
    };
}})();