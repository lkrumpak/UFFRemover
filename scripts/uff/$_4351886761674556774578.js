(function(){{
    if (a) {
        var c = u(a) ? a : a.B();
        a = Td(        $that, c);
        if (c && a) {
            var d =             $that.N;
            c in d && delete d[c];
            Ra(            $that.v, a);
            b && (a.ka(), a.f && Ic(a.f));
            Sd(a, null);
        }
    }
    if (!a)
        throw Error('Child is not in parent component');
    return a;
}})();