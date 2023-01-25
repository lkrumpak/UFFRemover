(function(){{
    node = dom.byId(node);
    var s = _39b || _398.getComputedStyle(node), p = geom.getPadExtents(node, s), b = geom.getBorderExtents(node, s);
    return {
        l: p.l + b.l,
        t: p.t + b.t,
        r: p.r + b.r,
        b: p.b + b.b,
        w: p.w + b.w,
        h: p.h + b.h
    };
}})();