(function(){{
    var array =         $that.__wrapped__.value(), dir =         $that.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength,         $that.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees =         $that.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length,         $that.__takeCount__);
    if (!isArr || arrLength < LARGE_ARRAY_SIZE || arrLength == length && takeCount == length) {
        return baseWrapperValue(isRight && isArr ? array.reverse() : array,         $that.__actions__);
    }
    var result = [];
    outer:
        while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value = array[index];
            while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee = data.iteratee, type = data.type, computed = iteratee(value);
                if (type == LAZY_MAP_FLAG) {
                    value = computed;
                } else if (!computed) {
                    if (type == LAZY_FILTER_FLAG) {
                        continue outer;
                    } else {
                        break outer;
                    }
                }
            }
            result[resIndex++] = value;
        }
    return result;
}})();