(function(){{
        $that.$assert(74, e && e.scope && e.fn);
    var t = e.onerror ? e.onerror : null, n = e.onerrorScope ? e.onerrorScope : null;
        $that._cbCount++,     $that._numberOfCallbacks++;
    var r = e.delay > 0 ? e.delay : 1, i = e.args ? e.args : null;
        $that._callbacks['' +    $that._cbCount] = {
        fn: e.fn,
        scope: e.scope,
        delay: r,
        args: i,
        onerror: t,
        onerrorScope: n
    };
    var s =         $that._cbCount, o = setTimeout(function () {
            aria.core.Timer._execCallback(s);
        }, r);
        $that._cancelIds['' + o] =     $that._cbCount,     $that._callbacks['' +    $that._cbCount].cancelId = o;
    var u =     $that._cbCount + '-' + o;
    return    $that._cbCount >    $that._MAX_COUNT && (    $that._cbCount = 0), u;
}})();