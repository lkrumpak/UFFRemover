(function(){{
    var length = array ? array.length : 0;
    if (!length) {
        return [];
    }
    var result = unzip(array);
    if (iteratee == null) {
        return result;
    }
    iteratee = bindCallback(iteratee, thisArg, 4);
    return arrayMap(result, function (group) {
        return arrayReduce(group, iteratee, undefined, true);
    });
}})();