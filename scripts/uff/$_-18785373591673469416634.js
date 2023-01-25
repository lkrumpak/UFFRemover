(function(){{
    var prefixed = {}, key;
    if (!prefix) {
        return obj;
    }
    prefix += '.';
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            prefixed[prefix + key] = obj[key];
        }
    }
    return prefixed;
}})();