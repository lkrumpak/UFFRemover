(function(){{
    if (!obj)
        return [];
    if (_.isArray(obj))
        return slice.call(obj);
    if (isArrayLike(obj))
        return _.map(obj, _.identity);
    return _.values(obj);
}})();