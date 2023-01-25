(function(){{
    node = dom.byId(node);
    var s = _399 || _398.getComputedStyle(node), px = _398.toPixelValue, l = px(node, s.paddingLeft), t = px(node, s.paddingTop), r = px(node, s.paddingRight), b = px(node, s.paddingBottom);
    return {
        l: l,
        t: t,
        r: r,
        b: b,
        w: l + r,
        h: t + b
    };
}})();