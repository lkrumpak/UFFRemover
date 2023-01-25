(function(){{
    return _.delay.apply(_, [
        func,
        1
    ].concat(slice.call(arguments, 1)));
}})();