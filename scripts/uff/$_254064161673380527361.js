(function(){{
    if (guard && isIterateeCall(func, thisArg, guard)) {
        thisArg = undefined;
    }
    return isObjectLike(func) ? matches(func) : baseCallback(func, thisArg);
}})();