(function(){{
    e.Aria = Aria;
    var t = Aria.$global, n = Aria.$classes, r = {};
    for (var i = 0, s = n.length; i < s; i++) {
        var o = n[i];
        if (o) {
            var u = o.$classpath;
            if (!u) {
                var a = o.classDefinition || o.interfaceDefinition;
                a && (u = a.$classpath);
            }
            if (u) {
                var f = u.indexOf('.'), l = f > -1 ? u.substring(0, f) : u;
                e[l] = t[l];
            }
        }
    }
}})();