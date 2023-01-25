(function(){{
    doc = doc || win.doc;
    var de = doc.documentElement;
    if (has('ie') < 8) {
        var r = de.getBoundingClientRect(), l = r.left, t = r.top;
        if (has('ie') < 7) {
            l += de.clientLeft;
            t += de.clientTop;
        }
        return {
            x: l < 0 ? 0 : l,
            y: t < 0 ? 0 : t
        };
    } else {
        return {
            x: 0,
            y: 0
        };
    }
}})();