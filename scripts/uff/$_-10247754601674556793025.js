(function(){{
    if (typeof iteratee != 'function' || thisArg !== undefined) {
        iteratee = bindCallback(iteratee, thisArg, 3);
    }
    return objectFunc(object, iteratee);
}})();