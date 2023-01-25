(function(){{
    if (value == null) {
        return true;
    }
    if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) || isObjectLike(value) && isFunction(value.splice))) {
        return !value.length;
    }
    return !keys(value).length;
}})();