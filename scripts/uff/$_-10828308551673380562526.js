(function(){{
    e('getConfig', [a], function (c) {
        c ? e('loadComponent', [
            a,
            c
        ], function (a) {
            b(a);
        }) : b(null);
    });
}})();