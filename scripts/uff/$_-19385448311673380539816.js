(function(){{
    if (!obj)
        return [];
    if (_.isArray(obj))
        return slice.call(obj);
    if (obj.length === +obj.length)
        return _.map(obj, _.identity);
    return _.values(obj);
}})();