(function(){{
    return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
}})();