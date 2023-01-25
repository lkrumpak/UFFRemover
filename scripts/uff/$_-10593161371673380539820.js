(function(){{
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
        pairs[i] = [
            keys[i],
            obj[keys[i]]
        ];
    }
    return pairs;
}})();