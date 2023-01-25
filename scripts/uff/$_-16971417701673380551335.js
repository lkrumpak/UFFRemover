(function(){{
    if (isNumeric(from) && isNumeric(to)) {
        return makeNumberInterpolator(+from, +to);
    }
    if (isArray(from) && isArray(to)) {
        return makeArrayInterpolator(from, to);
    }
    if (isObject(from) && isObject(to)) {
        return makeObjectInterpolator(from, to);
    }
    return function () {
        return to;
    };
}})();