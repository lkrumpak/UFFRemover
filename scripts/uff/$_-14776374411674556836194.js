(function(){{
    if (!isArrayLike(obj))
        obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard)
        fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
}})();