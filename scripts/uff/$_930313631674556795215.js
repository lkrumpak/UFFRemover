(function(){{
    var doc =         $that.ownerDocument ||        $that, attaches = jQuery._data(doc, fix) - 1;
    if (!attaches) {
        doc.removeEventListener(orig, handler, true);
        jQuery._removeData(doc, fix);
    } else {
        jQuery._data(doc, fix, attaches);
    }
}})();