(function(){{
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
        if (!_.contains(keys, key))
            copy[key] = obj[key];
    }
    return copy;
}})();