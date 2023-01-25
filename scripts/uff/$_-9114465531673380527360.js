(function(){{
    var value = string;
    string = baseToString(string);
    if (!string) {
        return string;
    }
    if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(trimmedLeftIndex(string));
    }
    return string.slice(charsLeftIndex(string, chars + ''));
}})();