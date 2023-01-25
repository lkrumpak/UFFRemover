(function(){{
    predicate = getCallback(predicate, thisArg, 1);
    return    $that.filter(function (value) {
        return !predicate(value);
    });
}})();