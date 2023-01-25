(function(){{
    var value =         $that.getValue(), parsed;
    if (typeof value === 'string') {
        parsed = parseJSON(value);
        value = parsed ? parsed.value : value;
    }
    return value;
}})();