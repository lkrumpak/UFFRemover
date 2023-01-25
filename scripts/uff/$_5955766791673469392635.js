(function(){{
    string = baseToString(string);
    return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
}})();