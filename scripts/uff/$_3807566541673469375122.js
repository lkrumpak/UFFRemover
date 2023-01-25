(function(){{
    return aria.utils.Type.isArray(t) || (t = [t]), e = e.replace(/%[0-9]+/g, function (e) {
        var n = t[parseInt(e.substring(1), 10) - 1];
        return typeof n != 'undefined' ? n : e;
    }), e;
}})();