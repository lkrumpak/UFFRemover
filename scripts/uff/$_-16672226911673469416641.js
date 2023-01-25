(function(){{
    var delta = to - from;
    if (!delta) {
        return function () {
            return from;
        };
    }
    return function (t) {
        return from + t * delta;
    };
}})();