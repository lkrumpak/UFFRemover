(function(){{
    var out = [], i = -1, n = arr.length, val;
    while (++i < n) {
        out[i] = deepClone(arr[i], instanceClone);
    }
    return out;
}})();