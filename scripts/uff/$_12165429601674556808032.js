(function(){{
    node = dom.byId(node);
    var s = _39c || _398.getComputedStyle(node), px = _398.toPixelValue, l = px(node, s.marginLeft), t = px(node, s.marginTop), r = px(node, s.marginRight), b = px(node, s.marginBottom);
    return {
        l: l,
        t: t,
        r: r,
        b: b,
        w: l + r,
        h: t + b
    };
}})();