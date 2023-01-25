(function(){{
    predicate = getCallback(predicate, thisArg, 3);
    if (isArray(collection)) {
        var index = baseFindIndex(collection, predicate, fromRight);
        return index > -1 ? collection[index] : undefined;
    }
    return baseFind(collection, predicate, eachFunc);
}})();