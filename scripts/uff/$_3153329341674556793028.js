(function(){{
    if (guard ? isIterateeCall(array, size, guard) : size == null) {
        size = 1;
    } else {
        size = nativeMax(nativeFloor(size) || 1, 1);
    }
    var index = 0, length = array ? array.length : 0, resIndex = -1, result = Array(nativeCeil(length / size));
    while (index < length) {
        result[++resIndex] = baseSlice(array, index, index += size);
    }
    return result;
}})();