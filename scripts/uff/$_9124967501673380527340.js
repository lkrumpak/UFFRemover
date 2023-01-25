(function(){{
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    return setTimeout(function () {
        func.apply(undefined, args);
    }, wait);
}})();