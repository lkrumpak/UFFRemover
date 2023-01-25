(function(){{
    var intermediate, interpolators, len, i;
    intermediate = [];
    interpolators = [];
    i = len = Math.min(from.length, to.length);
    while (i--) {
        interpolators[i] = interpolate(from[i], to[i]);
    }
    for (i = len; i < from.length; i += 1) {
        intermediate[i] = from[i];
    }
    for (i = len; i < to.length; i += 1) {
        intermediate[i] = to[i];
    }
    return function (t) {
        var i = len;
        while (i--) {
            intermediate[i] = interpolators[i](t);
        }
        return intermediate;
    };
}})();