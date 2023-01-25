(function(){{
    var keys = [];
    for (var key in obj) {
        if ({}.hasOwnProperty.call(obj, key))
            keys.push(key);
    }
    return keys;
}})();