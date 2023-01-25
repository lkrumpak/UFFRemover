(function(){{
    if (_.isFunction(iteratee)) {
        iteratee = _.negate(iteratee);
    } else {
        var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
        iteratee = function (value, key) {
            return !_.contains(keys, key);
        };
    }
    return _.pick(obj, iteratee, context);
}})();