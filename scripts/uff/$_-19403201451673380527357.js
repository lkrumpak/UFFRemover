(function(){{
    return value === true || value === false || isObjectLike(value) && objToString.call(value) == boolTag;
}})();