(function(){{
    var result;
    if (typeof func != 'function') {
        if (typeof n == 'function') {
            var temp = n;
            n = func;
            func = temp;
        } else {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
    }
    return function () {
        if (--n > 0) {
            result = func.apply(this, arguments);
        }
        if (n <= 1) {
            func = undefined;
        }
        return result;
    };
}})();