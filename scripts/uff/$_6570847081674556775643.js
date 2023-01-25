(function(){{
    if (!e || !__isValidContainer(e))
        return e;
    var t = typeUtils.isArray(e) ? [] : {};
    for (var n in e)
                $that.isMetadata(n) || (t[n] =         $that.removeMetadata(e[n]));
    return t;
}})();