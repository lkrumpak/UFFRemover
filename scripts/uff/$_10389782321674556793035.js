(function(){{
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    return function (array) {
        return func.apply(this, array);
    };
}})();