(function(){{
    d.each(a, function (a) {
        if (a instanceof g) {
            var d = b[a.$alias];
            d && (d.found = !0, c.push(function (b) {
                a.fetch({ fetchSubModels: d.subModels }, b);
            }));
        } else
            a instanceof Object && h(a, b, c);
    });
}})();