(function(){{
    var length = array.length, index = fromIndex + (fromRight ? 0 : -1);
    while (fromRight ? index-- : ++index < length) {
        var other = array[index];
        if (other !== other) {
            return index;
        }
    }
    return -1;
}})();