(function(){{
    if (collection == null) {
        return [];
    }
    if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = undefined;
    }
    var index = -1;
    iteratee = getCallback(iteratee, thisArg, 3);
    var result = baseMap(collection, function (value, key, collection) {
        return {
            'criteria': iteratee(value, key, collection),
            'index': ++index,
            'value': value
        };
    });
    return baseSortBy(result, compareAscending);
}})();