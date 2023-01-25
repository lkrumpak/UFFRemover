(function(){{
    if (step && isIterateeCall(start, end, step)) {
        end = step = undefined;
    }
    start = +start || 0;
    step = step == null ? 1 : +step || 0;
    if (end == null) {
        end = start;
        start = 0;
    } else {
        end = +end || 0;
    }
    // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
    // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
    var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
    while (++index < length) {
        result[index] = start;
        start += step;
    }
    return result;
}})();