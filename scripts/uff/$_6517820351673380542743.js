(function(){{
    node = dom.byId(node);
    var s = _39d || _398.getComputedStyle(node), me = geom.getMarginExtents(node, s), l = node.offsetLeft - me.l, t = node.offsetTop - me.t, p = node.parentNode, px = _398.toPixelValue, pcs;
    if (has('mozilla')) {
        var sl = parseFloat(s.left), st = parseFloat(s.top);
        if (!isNaN(sl) && !isNaN(st)) {
            l = sl;
            t = st;
        } else {
            if (p && p.style) {
                pcs = _398.getComputedStyle(p);
                if (pcs.overflow != 'visible') {
                    l += pcs.borderLeftStyle != none ? px(node, pcs.borderLeftWidth) : 0;
                    t += pcs.borderTopStyle != none ? px(node, pcs.borderTopWidth) : 0;
                }
            }
        }
    } else {
        if (has('opera') || has('ie') == 8 && !has('quirks')) {
            if (p) {
                pcs = _398.getComputedStyle(p);
                l -= pcs.borderLeftStyle != none ? px(node, pcs.borderLeftWidth) : 0;
                t -= pcs.borderTopStyle != none ? px(node, pcs.borderTopWidth) : 0;
            }
        }
    }
    return {
        l: l,
        t: t,
        w: node.offsetWidth + me.w,
        h: node.offsetHeight + me.h
    };
}})();