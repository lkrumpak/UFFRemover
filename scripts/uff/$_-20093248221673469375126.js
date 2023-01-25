(function(){{
    var e =     $that.getAppenders();
    for (var t = 0, n = e.length; t < n; t++)
        e[t].$dispose();
        $that._appenders = [];
}})();