(function(){{
    if (!(array && array.length)) {
        return [];
    }
    var index = -1, length = 0;
    array = arrayFilter(array, function (group) {
        if (isArrayLike(group)) {
            length = nativeMax(group.length, length);
            return true;
        }
    });
    var result = Array(length);
    while (++index < length) {
        result[index] = arrayMap(array, baseProperty(index));
    }
    return result;
}})();