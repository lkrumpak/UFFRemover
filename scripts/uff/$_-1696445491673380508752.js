(function(){{
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var g = 0; g < fb.length; g++)
            c = fb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
}})();