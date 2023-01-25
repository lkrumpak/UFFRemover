(function(){{
    if (typeof value === 'string') {
        return value;
    }
    return JSON.stringify(value);
}})();