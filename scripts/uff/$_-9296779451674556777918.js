(function(){{
    var keys = [];
    if (can.__reading) {
        can.__reading(map, '__keys');
    }
    for (var keyName in map._data) {
        keys.push(keyName);
    }
    return keys;
}})();