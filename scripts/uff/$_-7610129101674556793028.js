(function(){{
    var result = {};
    baseForIn(object, function (value, key, object) {
        if (predicate(value, key, object)) {
            result[key] = value;
        }
    });
    return result;
}})();