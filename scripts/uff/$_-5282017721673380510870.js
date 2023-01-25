(function(){{
    var doc =         $that.ownerDocument ||        $that, attaches = data_priv.access(doc, fix);
    if (!attaches) {
        doc.addEventListener(orig, handler, true);
    }
    data_priv.access(doc, fix, (attaches || 0) + 1);
}})();