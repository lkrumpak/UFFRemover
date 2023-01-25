(function(){{
    var result;
    baseEach(collection, function (value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
    });
    return !!result;
}})();