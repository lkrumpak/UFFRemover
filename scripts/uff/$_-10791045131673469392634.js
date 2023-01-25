(function(){{
    if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = undefined;
    }
    iteratee = getCallback(iteratee, thisArg, 3);
    if (iteratee.length == 1) {
        collection = isArray(collection) ? collection : toIterable(collection);
        var result = arrayExtremum(collection, iteratee, comparator, exValue);
        if (!(collection.length && result === exValue)) {
            return result;
        }
    }
    return baseExtremum(collection, iteratee, comparator, exValue);
}})();