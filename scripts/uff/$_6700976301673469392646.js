(function(){{
    customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
    return baseIsMatch(object, getMatchData(source), customizer);
}})();