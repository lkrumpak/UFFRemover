(function(){{
    if (object == null) {
        return false;
    }
    var result = hasOwnProperty.call(object, path);
    if (!result && !isKey(path)) {
        path = toPath(path);
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        if (object == null) {
            return false;
        }
        path = last(path);
        result = hasOwnProperty.call(object, path);
    }
    return result || isLength(object.length) && isIndex(path, object.length) && (isArray(object) || isArguments(object));
}})();