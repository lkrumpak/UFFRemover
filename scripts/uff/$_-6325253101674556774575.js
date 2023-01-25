(function(){{
    b.push('"', a.replace(sd, function (a) {
        var b = rd[a];
        b || (b = '\\u' + (a.charCodeAt(0) | 65536).toString(16).substr(1), rd[a] = b);
        return b;
    }), '"');
}})();