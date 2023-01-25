(function(){{
    return typeof value == 'number' || isObjectLike(value) && objToString.call(value) == numberTag;
}})();