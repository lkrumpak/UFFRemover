(function(){{
    if (collection == null) {
        return [];
    }
    var guard = iteratees[2];
    if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
        iteratees.length = 1;
    }
    return baseSortByOrder(collection, baseFlatten(iteratees), []);
}})();