(function(){{
    var length = array ? array.length : 0;
    if (!length) {
        return [];
    }
    if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
    }
    n = length - (+n || 0);
    return baseSlice(array, 0, n < 0 ? 0 : n);
}})();