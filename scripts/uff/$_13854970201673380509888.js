(function(){{
    var e =     $that._callbacks;
    if (        $that._numberOfCallbacks > 0) {
        var t;
        for (var n in e)
            t = e[n],             $that.cancelCallback(n + '-' + t.cancelId);
    }
}})();