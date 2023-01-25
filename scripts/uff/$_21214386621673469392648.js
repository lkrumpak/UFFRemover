(function(){{
    string = baseToString(string);
    return string && reHasRegExpChars.test(string) ? string.replace(reRegExpChars, escapeRegExpChar) : string || '(?:)';
}})();