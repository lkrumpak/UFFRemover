(function(){{
    var keys = _.keys(attrs), length = keys.length;
    if (object == null)
        return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
        var key = keys[i];
        if (attrs[key] !== obj[key] || !(key in obj))
            return false;
    }
    return true;
}})();