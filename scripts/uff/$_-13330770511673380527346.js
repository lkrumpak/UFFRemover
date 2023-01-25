(function(){{
    if (guard && isIterateeCall(func, arity, guard)) {
        arity = undefined;
    }
    var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
    result.placeholder = curryFunc.placeholder;
    return result;
}})();