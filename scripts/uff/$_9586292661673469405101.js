(function(){{
    var result = {};
    iteratee = _.iteratee(iteratee, context);
    _.each(obj, function (value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
    });
    return result;
}})();