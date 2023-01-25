(function(){{
    if (_.has(result, key))
        result[key].push(value);
    else
        result[key] = [value];
}})();