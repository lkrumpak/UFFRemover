(function(){{
    if (a.i && (c || !        $that.i))
        throw Error('Component already rendered');
    if (0 > b || b > Wd(        $that))
        throw Error('Child component index out of bounds');
        $that.N &&    $that.v || (    $that.N = {},     $that.v = []);
    if (a.getParent() ==        $that) {
        var d = a.B();
                $that.N[d] = a;
        Ra(        $that.v, a);
    } else
        eb(        $that.N, a.B(), a);
    Sd(a,     $that);
    Ua(    $that.v, b, 0, a);
    a.i &&    $that.i && a.getParent() ==    $that ? (c =     $that.J(), b = c.childNodes[b] || null, b != a.a() && c.insertBefore(a.a(), b)) : c ? (    $that.f ||    $that.D(), b = U(    $that, b + 1), Ud(a,     $that.J(), b ? b.f : null)) :     $that.i && !a.i && a.f && a.f.parentNode && 1 == a.f.parentNode.nodeType && a.S();
}})();