(function(){{
    return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
}})();