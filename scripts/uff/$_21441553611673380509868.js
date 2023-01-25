(function(){{
    var r = e.indexOf(t, n);
    while (r != -1) {
        if (!            $that.isEscaped(e, r))
            return r;
        r = e.indexOf(t, r + 1);
    }
    return -1;
}})();