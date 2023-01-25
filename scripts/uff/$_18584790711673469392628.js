(function(){{
    var result = [];
    baseEach(collection, function (value, index, collection) {
        if (predicate(value, index, collection)) {
            result.push(value);
        }
    });
    return result;
}})();