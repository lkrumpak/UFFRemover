(function(){{
    var index = -1, length = array.length, resIndex = -1, result = [];
    while (++index < length) {
        if (array[index] === placeholder) {
            array[index] = PLACEHOLDER;
            result[++resIndex] = index;
        }
    }
    return result;
}})();