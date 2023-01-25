(function(){{
    node = dom.byId(node);
    var w = box.w, h = box.h;
    if (_3a1(node)) {
        var pb = geom.getPadBorderExtents(node, _3a2);
        if (w >= 0) {
            w += pb.w;
        }
        if (h >= 0) {
            h += pb.h;
        }
    }
    _39f(node, NaN, NaN, w, h);
}})();