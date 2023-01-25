(function(){{
    if (util.isUndefined(value)) {
        return '' + value;
    }
    if (util.isNumber(value) && !isFinite(value)) {
        return value.toString();
    }
    if (util.isFunction(value) || util.isRegExp(value)) {
        return value.toString();
    }
    return value;
}})();