(function(){{
    if (t ||        $that._timestampURL[e]) {
        var n = new Date().getTime();
        return e.indexOf('?') != -1 ? e + '&timestamp=' + n : e + '?timestamp=' + n;
    }
    return e;
}})();