(function(){{
    if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    return function () {
        return !predicate.apply(this, arguments);
    };
}})();