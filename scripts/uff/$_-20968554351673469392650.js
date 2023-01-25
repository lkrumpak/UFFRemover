(function(){{
    if (guard && isIterateeCall(string, pattern, guard)) {
        pattern = undefined;
    }
    string = baseToString(string);
    return string.match(pattern || reWords) || [];
}})();