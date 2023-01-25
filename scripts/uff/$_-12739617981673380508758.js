(function(){{
    function b(a) {
        if (t(a))
            B(a, b);
        else {
            if (!(a instanceof qc)) {
                var g = null;
                a.Wb && (g = a.za());
                a = zc(sa(a.Ca ? a.Aa() : String(a)), g);
            }
            d += sc(a);
            a = a.za();
            0 == c ? c = a : 0 != a && c != a && (c = null);
        }
    }
    var c = 0, d = '';
    B(arguments, b);
    return zc(d, c);
}})();