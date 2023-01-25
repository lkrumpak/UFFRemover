(function(){{
    var length = collection ? getLength(collection) : 0;
    return isLength(length) ? length : keys(collection).length;
}})();