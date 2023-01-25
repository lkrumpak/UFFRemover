(function(){{
    var t =     $that._loggingLevels[e];
    if (!t) {
        var n = e;
        while (n.indexOf('.') != -1) {
            n = n.substring(0, n.lastIndexOf('.'));
            if (                $that._loggingLevels[n])
                return                $that._loggingLevels[n];
            if (                $that._loggingLevels[n + '.*'])
                return                $that._loggingLevels[n + '.*'];
        }
        return        $that._loggingLevels['*'] || !1;
    }
    return t;
}})();