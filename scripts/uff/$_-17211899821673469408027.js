(function(){{
    node = dom.byId(node);
    var s = _3a4 || _398.getComputedStyle(node), w = box.w, h = box.h, pb = _3a1(node) ? _3a3 : geom.getPadBorderExtents(node, s), mb = geom.getMarginExtents(node, s);
    if (has('webkit')) {
        if (_3a0(node)) {
            var ns = node.style;
            if (w >= 0 && !ns.width) {
                ns.width = '4px';
            }
            if (h >= 0 && !ns.height) {
                ns.height = '4px';
            }
        }
    }
    if (w >= 0) {
        w = Math.max(w - pb.w - mb.w, 0);
    }
    if (h >= 0) {
        h = Math.max(h - pb.h - mb.h, 0);
    }
    _39f(node, box.l, box.t, w, h);
}})();