(function(){{
    var e =     $that._mdp;
    if (e) {
        var t = e.length;
        for (var n = 0; n < t; n += 1) {
            var r = e[n];
            r.isReady || r.loader.loadClassDefinition();
            if (!                $that._mdp)
                break;
        }
    } else
                $that._mdpErrors &&        $that._handleError();
}})();