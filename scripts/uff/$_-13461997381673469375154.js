(function(){{
    var n = !1;
    if (e == null)
        n = !0;
    else {
        var r = e.split('_');
        e === '' || e.length === 5 && r !== null && r.length === 2 || e.length == 2 ? aria.core.AppEnvironment.setEnvironment({
            language: {
                primaryLanguage: r[0],
                region: r[1]
            }
        }, t) : n = !0;
    }
    n && (    $that.$logError(    $that.INVALID_LOCALE, [e]),     $that.$callback(t, !0));
}})();