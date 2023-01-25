(function(){{
    if (obj == null)
        return true;
    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))
        return obj.length === 0;
    for (var key in obj)
        if (_.has(obj, key))
            return false;
    return true;
}})();