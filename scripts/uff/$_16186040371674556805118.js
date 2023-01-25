(function(){{
    predicate = _.iteratee(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function (value, key, obj) {
        (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [
        pass,
        fail
    ];
}})();