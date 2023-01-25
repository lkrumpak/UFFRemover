(function(){{
    if (obj == null)
        return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)))
        return obj.length === 0;
    return _.keys(obj).length === 0;
}})();