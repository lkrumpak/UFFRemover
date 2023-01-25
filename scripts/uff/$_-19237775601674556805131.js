(function(){{
    if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) {
        throw new TypeError('keys() called on a non-object');
    }
    var key, keys = [];
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys[keys.length] = key;
        }
    }
    return keys;
}})();