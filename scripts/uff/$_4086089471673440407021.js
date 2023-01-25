(function(){{
    a = a || Ia;
    return function (b, d, e) {
        for (var g = 0, h = b[Pd]; b = h[g++];)
            ab(b) && (!e || c(b, e)) && a(b, g) && d.push(b);
        return d;
    };
}})();