(function(){{
    var pairs = _.pairs(attrs), length = pairs.length;
    return function (obj) {
        if (obj == null)
            return !length;
        obj = new Object(obj);
        for (var i = 0; i < length; i++) {
            var pair = pairs[i], key = pair[0];
            if (pair[1] !== obj[key] || !(key in obj))
                return false;
        }
        return true;
    };
}})();