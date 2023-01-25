(function(){{
    if (!value) {
        return value;
    }
    var g = global;
    each(value.split('.'), function (part) {
        g = g[part];
    });
    return g;
}})();