(function(){{
    var e =         $that._listenersToRemove, t;
    for (var n = 0, r = e.length; n < r; n++)
        t = e[n], t[0][t[1]](t[2], t[3], !1);
        $that._listenersToRemove = [];
}})();