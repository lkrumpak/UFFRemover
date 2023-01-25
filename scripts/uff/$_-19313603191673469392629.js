(function(){{
    var isArr = isArray(path), isCommon = isKey(path) && isStrictComparable(srcValue), pathKey = path + '';
    path = toPath(path);
    return function (object) {
        if (object == null) {
            return false;
        }
        var key = pathKey;
        object = toObject(object);
        if ((isArr || !isCommon) && !(key in object)) {
            object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
            if (object == null) {
                return false;
            }
            key = last(path);
            object = toObject(object);
        }
        return object[key] === srcValue ? srcValue !== undefined || key in object : baseIsEqual(srcValue, object[key], undefined, true);
    };
}})();