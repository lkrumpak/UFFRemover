(function(){{
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function (value) {
        return !_.contains(rest, value);
    });
}})();