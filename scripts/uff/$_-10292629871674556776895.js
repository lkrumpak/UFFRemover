(function(){{
    if (arguments.length) {
        return options === undefined ?         $that :         $that.each(function (i) {
            jQuery.offset.setOffset(this, options, i);
        });
    }
    var docElem, win, elem =         $that[0], box = {
            top: 0,
            left: 0
        }, doc = elem && elem.ownerDocument;
    if (!doc) {
        return;
    }
    docElem = doc.documentElement;
    // Make sure it's not a disconnected DOM node
    if (!jQuery.contains(docElem, elem)) {
        return box;
    }
    // Support: BlackBerry 5, iOS 3 (original iPhone)
    // If we don't have gBCR, just use 0,0 rather than error
    if (typeof elem.getBoundingClientRect !== strundefined) {
        box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {
        top: box.top + win.pageYOffset - docElem.clientTop,
        left: box.left + win.pageXOffset - docElem.clientLeft
    };
}})();