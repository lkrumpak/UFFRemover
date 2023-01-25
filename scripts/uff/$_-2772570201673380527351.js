(function(){{
    var othLength = arrays.length, othIndex = othLength, caches = Array(length), indexOf = getIndexOf(), isCommon = indexOf == baseIndexOf, result = [];
    while (othIndex--) {
        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
        caches[othIndex] = isCommon && value.length >= 120 ? createCache(othIndex && value) : null;
    }
    var array = arrays[0], index = -1, length = array ? array.length : 0, seen = caches[0];
    outer:
        while (++index < length) {
            value = array[index];
            if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
                var othIndex = othLength;
                while (--othIndex) {
                    var cache = caches[othIndex];
                    if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
                        continue outer;
                    }
                }
                if (seen) {
                    seen.push(value);
                }
                result.push(value);
            }
        }
    return result;
}})();