(function(){{
    var leading = true, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (options === false) {
        leading = false;
    } else if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        'leading': leading,
        'maxWait': +wait,
        'trailing': trailing
    });
}})();