(function(){{
    var n =     $that._uriScheme.exec(e.toLowerCase());
    if (n && t) {
        var r = n[1], i = n[2];
        if (            $that._uriLocal.test(r))
            return            $that.__local;
        if (r != t.protocol || i.indexOf(t.host) !== 0)
            return            $that.__crossDomain;
    }
    return    $that.__sameDomain;
}})();