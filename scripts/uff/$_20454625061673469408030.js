(function(){{
    node = dom.byId(node);
    var me = geom.getMarginExtents(node, _3a9 || _398.getComputedStyle(node));
    var size = node.getBoundingClientRect();
    return {
        w: size.right - size.left + me.w,
        h: size.bottom - size.top + me.h
    };
}})();