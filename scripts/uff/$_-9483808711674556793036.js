(function(){{
    customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
    var result = customizer ? customizer(value, other) : undefined;
    return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
}})();