(function(){{
    if ('number' == typeof a || !a || a.Ha)
        return !1;
    var b = a.src;
    if (b && b[Eb])
        return Kb(b.W, a);
    var c = a.type, d = a.Cb;
    b.removeEventListener ? b.removeEventListener(c, d, a.Oa) : b.detachEvent && b.detachEvent(Rb(c), d);
    Nb--;
    (c = Pb(b)) ? (Kb(c, a), 0 == c.bb && (c.src = null, b[Lb] = null)) : Hb(a);
    return !0;
}})();