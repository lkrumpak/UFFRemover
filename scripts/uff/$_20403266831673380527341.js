(function(){{
    var result;
    eachFunc(collection, function (value, key, collection) {
        if (predicate(value, key, collection)) {
            result = retKey ? key : value;
            return false;
        }
    });
    return result;
}})();