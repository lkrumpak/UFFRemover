(function(){{
    var index = -1, length = array.length, othIndex = -1, othLength = other.length, result = Array(length + othLength);
    while (++index < length) {
        result[index] = array[index];
    }
    while (++othIndex < othLength) {
        result[index++] = other[othIndex];
    }
    return result;
}})();