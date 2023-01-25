(function(){{
    if (!name) {
        return null;
    }
    name = name.split('.');
    var last = root || window, o = root || window, i = -1, segment;
    while (!!(segment = name[++i])) {
        o = o[segment];
        if (!o) {
            if (createIfNotExists) {
                o = last[segment] = {};
            } else {
                return null;
            }
        }
        last = o;
    }
    return o;
}})();