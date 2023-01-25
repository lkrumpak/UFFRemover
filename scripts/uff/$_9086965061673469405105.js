(function(){{
    return function () {
        return !predicate.apply(this, arguments);
    };
}})();