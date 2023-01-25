(function(){{
    return _.filter(obj, function (value, index, list) {
        return !predicate.call(context, value, index, list);
    }, context);
}})();