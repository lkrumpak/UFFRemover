(function(){{
    var pass = [], fail = [];
    each(array, function (elem) {
        (predicate(elem) ? pass : fail).push(elem);
    });
    return [
        pass,
        fail
    ];
}})();