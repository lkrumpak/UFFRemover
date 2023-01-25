(function(){{
    n = nativeFloor(n);
    // Exit early to avoid a JSC JIT bug in Safari 8
    // where `Array(0)` is treated as `Array(1)`.
    if (n < 1 || !nativeIsFinite(n)) {
        return [];
    }
    var index = -1, result = Array(nativeMin(n, MAX_ARRAY_LENGTH));
    iteratee = bindCallback(iteratee, thisArg, 1);
    while (++index < n) {
        if (index < MAX_ARRAY_LENGTH) {
            result[index] = iteratee(index);
        } else {
            iteratee(index);
        }
    }
    return result;
}})();