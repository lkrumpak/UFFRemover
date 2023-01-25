(function(){{
    e.name === 'classError' && (    $that._mdpErrors = !0);
    var t = e.refClasspath;
        $that.$assert(283, !!t),     $that.$assert(284,     $that._mdp != null);
    var n =         $that._mdp.length, r, i = !0, s = !1;
    for (var o = 0; n > o; o++) {
        r =         $that._mdp[o];
        if (!s && !r.isReady && r.classpath == t)
            s = !0, r.isReady = !0;
        else if (i)
            i = r.isReady;
        else if (s)
            break;
    }
        $that.$assert(301, s === !0);
    if (!i)
        return;
        $that._mdpErrors ?     $that._handleError() :     $that._refClasspath != null ? (    $that.$assert(286,     $that.callback != null),     $that.callback.fn.call(    $that.callback.scope,     $that.callback.args)) : (    $that._mdp = null,     $that.notifyLoadComplete());
}})();