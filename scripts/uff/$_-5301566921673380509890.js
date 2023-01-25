(function(){{
    var t = e.getAllResponseHeaders(), n = {};
    if (t) {
        var r = t.split('\n');
        for (var i = 0; i < r.length; i++) {
            var s = r[i].indexOf(':');
            s != -1 && (n[r[i].substring(0, s)] = r[i].substring(s + 2).replace(/^\s+|\s+$/g, ''));
        }
    }
    var o = {
        statusText: e.status == 1223 ? 'No Content' : e.statusText,
        getResponseHeader: n,
        getAllResponseHeaders: r,
        responseText: e.responseText,
        responseXML: e.responseXML
    };
    return o;
}})();