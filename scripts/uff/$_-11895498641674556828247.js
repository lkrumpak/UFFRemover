(function(){{
    for (var d =             $that.v(), c = [], e = 'function' != typeof b || a.C(b) ? function (a) {
                return a === b;
            } : b, f = 0; f < d.length; f++) {
        var h = d[f];
        e(h) && (0 === c.length &&        $that.X(), c.push(h), d.splice(f, 1), f--);
    }
    c.length &&    $that.W();
    return c;
}})();