(function(){{
    var keys = [];
    for (var key in obj) {
        if (hasOwn.call(obj, key))
            keys.push(key);
    }
    return keys;
}})();