(function(){{
    doc = doc || win.doc;
    var node = win.doc.parentWindow || win.doc.defaultView;
    return 'pageXOffset' in node ? {
        x: node.pageXOffset,
        y: node.pageYOffset
    } : (node = has('quirks') ? win.body(doc) : doc.documentElement) && {
        x: geom.fixIeBiDiScrollLeft(node.scrollLeft || 0, doc),
        y: node.scrollTop || 0
    };
}})();