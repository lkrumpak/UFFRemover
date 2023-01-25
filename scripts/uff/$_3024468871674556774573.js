(function(){{
    b = ' ' + b;
    return function (c) {
        c = ' ' + Fa(c, a);
        return c == b || 0 == c.indexOf(b + '-');
    };
}})();