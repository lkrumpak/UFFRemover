(function(){{
    var t = e.changedProperties, n =         $that._localDefCfg, r = t == null;
    if (t)
        for (var i = 0, s = t.length; i < s; i++) {
            var o = t[i];
            if (o in n) {
                r = !0;
                break;
            }
        }
    r && (e.asyncCalls++,     $that._normAndApplyEnv(e.callback));
}})();