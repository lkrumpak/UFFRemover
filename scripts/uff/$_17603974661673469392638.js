(function(){{
    if (isArray(value)) {
        return value;
    }
    var result = [];
    baseToString(value).replace(rePropName, function (match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
}})();