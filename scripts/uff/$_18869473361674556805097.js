(function(){{
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function (item) {
        return _.every(rest, function (other) {
            return _.contains(other, item);
        });
    });
}})();