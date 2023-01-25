(function(){{
    var doc =         $that.ownerDocument ||        $that, attaches = data_priv.access(doc, fix) - 1;
    if (!attaches) {
        doc.removeEventListener(orig, handler, true);
        data_priv.remove(doc, fix);
    } else {
        data_priv.access(doc, fix, attaches);
    }
}})();