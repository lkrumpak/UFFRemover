(function(){{
    if (object == null) {
        return object;
    }
    var pathKey = path + '';
    path = object[pathKey] != null || isKey(path, object) ? [pathKey] : toPath(path);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object;
    while (nested != null && ++index < length) {
        var key = path[index];
        if (isObject(nested)) {
            if (index == lastIndex) {
                nested[key] = value;
            } else if (nested[key] == null) {
                nested[key] = isIndex(path[index + 1]) ? [] : {};
            }
        }
        nested = nested[key];
    }
    return object;
}})();