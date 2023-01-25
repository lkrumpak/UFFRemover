(function(){{
    var doc = win.doc;
    if (_414) {
        _414 = dom.byId(_414);
        doc = _414.ownerDocument;
    }
    if (typeof tag == 'string') {
        tag = doc.createElement(tag);
    }
    if (_413) {
        attr.set(tag, _413);
    }
    if (_414) {
        _400.place(tag, _414, pos);
    }
    return tag;
}})();