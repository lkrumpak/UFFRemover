(function(){{
    b.__ko_hasfocusUpdating = !0;
    var g = b.ownerDocument;
    if ('activeElement' in g) {
        var f;
        try {
            f = g.activeElement;
        } catch (h) {
            f = g.body;
        }
        e = f === b;
    }
    g = d();
    a.h.pa(g, c, 'hasfocus', e, !0);
    b.__ko_hasfocusLastValue = e;
    b.__ko_hasfocusUpdating = !1;
}})();