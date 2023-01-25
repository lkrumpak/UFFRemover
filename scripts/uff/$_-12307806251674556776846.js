(function(){{
    var i = 0, len = list.length;
    for (; i < len; i++) {
        if (list[i] === elem) {
            return i;
        }
    }
    return -1;
}})();