(function(){{
    doc = doc || win.doc;
    var ie = has('ie');
    if (ie && !geom.isBodyLtr(doc)) {
        var qk = has('quirks'), de = qk ? win.body(doc) : doc.documentElement, pwin = win.global;
        if (ie == 6 && !qk && pwin.frameElement && de.scrollHeight > de.clientHeight) {
            _3a5 += de.clientLeft;
        }
        return ie < 8 || qk ? _3a5 + de.clientWidth - de.scrollWidth : -_3a5;
    }
    return _3a5;
}})();