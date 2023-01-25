(function(){{
    a = a && a.toString();
    var b = 0, c;
    for (c in        $that.w)
        if (!a || c == a) {
            for (var d =                     $that.w[c], e = 0; e < d.length; e++)
                ++b, Hb(d[e]);
            delete            $that.w[c];
                        $that.bb--;
        }
    return b;
}})();