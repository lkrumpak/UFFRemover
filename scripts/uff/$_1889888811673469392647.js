(function(){{
    var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
    return result === undefined ? defaultValue : result;
}})();