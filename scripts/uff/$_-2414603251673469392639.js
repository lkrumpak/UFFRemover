(function(){{
    var length = array ? array.length : 0;
    if (guard && isIterateeCall(array, isDeep, guard)) {
        isDeep = false;
    }
    return length ? baseFlatten(array, isDeep) : [];
}})();