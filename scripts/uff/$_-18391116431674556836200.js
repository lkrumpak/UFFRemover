(function(){{
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function (value) {
        return !_.contains(rest, value);
    });
}})();