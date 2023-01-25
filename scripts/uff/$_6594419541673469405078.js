(function(){{
    var result = {};
    iterator = lookupIterator(iterator);
    each(obj, function (value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
    });
    return result;
}})();