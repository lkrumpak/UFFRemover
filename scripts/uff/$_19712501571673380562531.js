(function(){{
    if ('function' != typeof d())
        throw Error('The value for a submit binding must be a function');
    a.a.n(b, 'submit', function (a) {
        var c, e = d();
        try {
            c = e.call(f.$data, b);
        } finally {
            !0 !== c && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        }
    });
}})();