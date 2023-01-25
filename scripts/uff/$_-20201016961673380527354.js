(function(){{
    var func = isArray(collection) ? arrayFilter : baseFilter;
    predicate = getCallback(predicate, thisArg, 3);
    return func(collection, function (value, index, collection) {
        return !predicate(value, index, collection);
    });
}})();