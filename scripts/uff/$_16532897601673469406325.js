(function(){{
    if (!a)
        return a;
    var b = global;
    return each(a.split('.'), function (a) {
        b = b[a];
    }), b;
}})();