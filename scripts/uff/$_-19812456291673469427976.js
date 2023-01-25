(function(){{
    var c;
    return function () {
        c || (c = setTimeout(function () {
            c = n;
            a();
        }, d));
    };
}})();