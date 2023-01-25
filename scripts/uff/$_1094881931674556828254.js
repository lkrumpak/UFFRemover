(function(){{
    function h() {
        0 === --u && e(k);
    }
    var k = {}, u = 2, t = d.template;
    d = d.viewModel;
    t ? f(c, t, function (c) {
        a.g.jb('loadTemplate', [
            b,
            c
        ], function (a) {
            k.template = a;
            h();
        });
    }) : h();
    d ? f(c, d, function (c) {
        a.g.jb('loadViewModel', [
            b,
            c
        ], function (a) {
            k[g] = a;
            h();
        });
    }) : h();
}})();