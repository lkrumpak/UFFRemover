(function(){{
    var index = -1, array = words(deburr(string)), length = array.length, result = '';
    while (++index < length) {
        result = callback(result, array[index], index);
    }
    return result;
}})();