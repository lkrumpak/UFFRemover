(function(){{
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
}})();