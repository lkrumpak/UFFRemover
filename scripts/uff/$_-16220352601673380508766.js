(function(){{
    return function (b, d, e) {
        for (b = b[bb]; b;) {
            if (ab(b)) {
                if (e && !c(b, e))
                    break;
                a(b) && d.push(b);
            }
            b = b[bb];
        }
        return d;
    };
}})();