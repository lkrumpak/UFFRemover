(function(){{
    if (value == null)
        return _.identity;
    if (_.isFunction(value))
        return value;
    return _.property(value);
}})();