(function(){{
    if ('function' === typeof b)
        c(function (a) {
            return new b(a);
        });
    else if ('function' === typeof b[g])
        c(b[g]);
    else if ('instance' in b) {
        var e = b.instance;
        c(function () {
            return e;
        });
    } else
        'viewModel' in b ? d(a, b.viewModel, c) : a('Unknown viewModel value: ' + b);
}})();