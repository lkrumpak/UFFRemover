(function(){{
    s = '' + s;
    for (var n in _htmlEscapes) {
        s = s.split(n).join(_htmlEscapes[n]);
    }
    return s;
}})();