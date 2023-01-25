(function(){{
    var r, i;
    try {
        var s = t.status;
        s ? r = s || 200 : !s && t.responseText ? r = 200 : s == 1223 ? r = 204 : r = 13030;
    } catch (o) {
        r = 13030;
    }
    var u = !1;
    r >= 200 && r < 300 ? i =     $that._createResponse(t) : (i = {
        error: [
            r,
            t.statusText
        ].join(' '),
        responseText: t.responseText,
        responseXML: t.responseXML
    }, u = !0), i.status = r, n.fn.call(n.scope, u, n.args, i), t = null, i = null;
}})();