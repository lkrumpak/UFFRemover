(function(){{
    return n.lastIndex = 0, n.test(e) ? '"' + e.replace(n, function (e) {
        var t = s[e];
        return typeof t == 'string' ? t : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + e + '"';
}})();