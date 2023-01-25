(function(){{
    if (xs.filter)
        return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs))
            res.push(xs[i]);
    }
    return res;
}})();