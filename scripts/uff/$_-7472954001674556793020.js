(function(){{
    eachFunc(collection, function (value, index, collection) {
        accumulator = initFromCollection ? (initFromCollection = false, value) : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
}})();