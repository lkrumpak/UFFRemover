(function(){{
    if (!(array && array.length)) {
        return -1;
    }
    predicate = getCallback(predicate, thisArg, 3);
    return baseFindIndex(array, predicate, fromRight);
}})();