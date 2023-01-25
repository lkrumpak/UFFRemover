(function(){{
    var index = -1, length = array.length;
    while (++index < length) {
        if (!predicate(array[index], index, array)) {
            return false;
        }
    }
    return true;
}})();