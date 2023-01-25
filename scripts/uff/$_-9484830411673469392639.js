(function(){{
    return isObjectLike(array) && isArrayLike(array) ? baseDifference(array, baseFlatten(values, false, true)) : [];
}})();