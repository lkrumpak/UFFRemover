(function(){{
    node = dom.byId(node);
    var s = _39e || _398.getComputedStyle(node), w = node.clientWidth, h, pe = geom.getPadExtents(node, s), be = geom.getBorderExtents(node, s);
    if (!w) {
        w = node.offsetWidth;
        h = node.offsetHeight;
    } else {
        h = node.clientHeight;
        be.w = be.h = 0;
    }
    if (has('opera')) {
        pe.l += be.l;
        pe.t += be.t;
    }
    return {
        l: pe.l,
        t: pe.t,
        w: w - pe.w - be.w,
        h: h - pe.h - be.h
    };
}})();