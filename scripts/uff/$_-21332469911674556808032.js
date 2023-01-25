(function(){{
    node = dom.byId(node);
    var px = _398.toPixelValue, s = _39a || _398.getComputedStyle(node), l = s.borderLeftStyle != none ? px(node, s.borderLeftWidth) : 0, t = s.borderTopStyle != none ? px(node, s.borderTopWidth) : 0, r = s.borderRightStyle != none ? px(node, s.borderRightWidth) : 0, b = s.borderBottomStyle != none ? px(node, s.borderBottomWidth) : 0;
    return {
        l: l,
        t: t,
        r: r,
        b: b,
        w: l + r,
        h: t + b
    };
}})();