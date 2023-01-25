(function(){{
    var b = U(    $that,     $that.h);
    if (b && 'function' == typeof b.ba && b.ba(a) ||        $that.s &&        $that.s != b && 'function' == typeof        $that.s.ba &&        $that.s.ba(a))
        return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)
        return !1;
    switch (a.keyCode) {
    case 27:
        if (            $that.ca())
                        $that.u().blur();
        else
            return !1;
        break;
    case 36:
        nf(        $that);
        break;
    case 35:
        of(        $that);
        break;
    case 38:
        if (            $that.pa == hf)
            pf(            $that);
        else
            return !1;
        break;
    case 37:
        if (            $that.pa == cf)
            Xd(            $that) ? qf(            $that) : pf(            $that);
        else
            return !1;
        break;
    case 40:
        if (            $that.pa == hf)
            qf(            $that);
        else
            return !1;
        break;
    case 39:
        if (            $that.pa == cf)
            Xd(            $that) ? pf(            $that) : qf(            $that);
        else
            return !1;
        break;
    default:
        return !1;
    }
    return !0;
}})();