(function(){{
    var length = value ? getLength(value) : 0;
    if (!isLength(length)) {
        return values(value);
    }
    if (!length) {
        return [];
    }
    return arrayCopy(value);
}})();