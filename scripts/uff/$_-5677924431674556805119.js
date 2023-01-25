(function(){{
    if (array == null)
        return -1;
    var idx = array.length;
    if (typeof from == 'number') {
        idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    while (--idx >= 0)
        if (array[idx] === item)
            return idx;
    return -1;
}})();