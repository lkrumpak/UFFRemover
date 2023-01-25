(function(){{
    if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = undefined;
    }
    iteratee = getCallback(iteratee, thisArg, 3);
    return iteratee.length == 1 ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee) : baseSum(collection, iteratee);
}})();