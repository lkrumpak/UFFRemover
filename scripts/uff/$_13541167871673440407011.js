(function(){{
    if (        $that.enabled) {
        var a = na() -        $that.Zb;
        0 < a && a < 0.8 *        $that.Wa ?         $that.l =         $that.Ma.setTimeout(        $that.Kb,         $that.Wa - a) : (        $that.l && (        $that.Ma.clearTimeout(        $that.l),         $that.l = null),         $that.dispatchEvent($b),         $that.enabled && (        $that.l =         $that.Ma.setTimeout(        $that.Kb,         $that.Wa),         $that.Zb = na()));
    }
}})();