(function(){{
    if (!e)
        e =         $that._refClasspath;
    else if (        $that._refClasspath == e)
        return !0;
    var t;
    if (        $that._mdp)
        for (var n = 0, r =                 $that._mdp.length; n < r; n++) {
            t =             $that._mdp[n].loader.getCircular(e);
            if (t)
                return t === !0 ?                 $that._refClasspath : t;
        }
    return !1;
}})();