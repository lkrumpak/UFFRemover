(function(){{
    if (_.isFunction(iteratee)) {
        iteratee = _.negate(iteratee);
    } else {
        var keys = _.map(flatten(arguments, false, false, 1), String);
        iteratee = function (value, key) {
            return !_.contains(keys, key);
        };
    }
    return _.pick(obj, iteratee, context);
}})();