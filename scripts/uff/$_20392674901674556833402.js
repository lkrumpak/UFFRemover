(function(){{
    var result = [];
    for (var i = 0; i < source.length; i++) {
        result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
    }
    return result;
}})();