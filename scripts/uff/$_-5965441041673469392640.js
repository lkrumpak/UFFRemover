(function(){{
    var length = array ? array.length : 0;
    if (!length) {
        return [];
    }
    if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
    }
    return baseSlice(array, start, end);
}})();