(function(){{
    var length = array.length, result = 0;
    while (length--) {
        result += +iteratee(array[length]) || 0;
    }
    return result;
}})();