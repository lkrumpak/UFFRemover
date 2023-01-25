(function(){{
    if (arguments.length === 1) {
        var attrs = a[0];
        for (var i = 1; i < a.length; i++) {
            attrs = merge(attrs, a[i]);
        }
        return attrs;
    }
    var ac = a['class'];
    var bc = b['class'];
    if (ac || bc) {
        ac = ac || [];
        bc = bc || [];
        if (!Array.isArray(ac))
            ac = [ac];
        if (!Array.isArray(bc))
            bc = [bc];
        a['class'] = ac.concat(bc).filter(nulls);
    }
    for (var key in b) {
        if (key != 'class') {
            a[key] = b[key];
        }
    }
    return a;
}})();