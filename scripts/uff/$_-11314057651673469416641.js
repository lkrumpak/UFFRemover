(function(){{
    var properties = [], len, interpolators, intermediate, prop;
    intermediate = {};
    interpolators = {};
    for (prop in from) {
        if (from.hasOwnProperty(prop)) {
            if (to.hasOwnProperty(prop)) {
                properties[properties.length] = prop;
                interpolators[prop] = interpolate(from[prop], to[prop]);
            } else {
                intermediate[prop] = from[prop];
            }
        }
    }
    for (prop in to) {
        if (to.hasOwnProperty(prop) && !from.hasOwnProperty(prop)) {
            intermediate[prop] = to[prop];
        }
    }
    len = properties.length;
    return function (t) {
        var i = len, prop;
        while (i--) {
            prop = properties[i];
            intermediate[prop] = interpolators[prop](t);
        }
        return intermediate;
    };
}})();