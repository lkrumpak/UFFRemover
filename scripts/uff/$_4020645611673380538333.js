(function(){{
    var len = depths.length;
    for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
            return depths[i][name];
        }
    }
}})();