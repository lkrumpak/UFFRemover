(function(){{
    var n, r = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;
    while (n = r.exec(e)) {
        t(n[1].toLowerCase(), n[2] || n[3] || n[4]);
    }
}})();