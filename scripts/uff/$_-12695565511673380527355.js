(function(){{
    if (guard && isIterateeCall(func, n, guard)) {
        n = undefined;
    }
    n = func && n == null ? func.length : nativeMax(+n || 0, 0);
    return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
}})();