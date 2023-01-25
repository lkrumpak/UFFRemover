(function(){{
    var result = initializer ? initializer() : {};
    iteratee = getCallback(iteratee, thisArg, 3);
    if (isArray(collection)) {
        var index = -1, length = collection.length;
        while (++index < length) {
            var value = collection[index];
            setter(result, value, iteratee(value, index, collection), collection);
        }
    } else {
        baseEach(collection, function (value, key, collection) {
            setter(result, value, iteratee(value, key, collection), collection);
        });
    }
    return result;
}})();