(function(){{
    var doc =         $that.ownerDocument ||        $that, attaches = jQuery._data(doc, fix);
    if (!attaches) {
        doc.addEventListener(orig, handler, true);
    }
    jQuery._data(doc, fix, (attaches || 0) + 1);
}})();