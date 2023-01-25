(function(){{
    var flat = [];
    for (var i = 0, n = arr.length; i < n; i++) {
        flat = flat.concat(arr[i]);
    }
    return flat;
}})();