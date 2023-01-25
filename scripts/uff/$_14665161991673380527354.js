(function(){{
    var func = isArray(collection) ? arrayEvery : baseEvery;
    if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
        predicate = undefined;
    }
    if (typeof predicate != 'function' || thisArg !== undefined) {
        predicate = getCallback(predicate, thisArg, 3);
    }
    return func(collection, predicate);
}})();