(function(){{
    var elem, elems = selector ? jQuery.filter(selector,         $that) :         $that, i = 0;
    for (; (elem = elems[i]) != null; i++) {
        if (!keepData && elem.nodeType === 1) {
            jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
            if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                setGlobalEval(getAll(elem, 'script'));
            }
            elem.parentNode.removeChild(elem);
        }
    }
    return    $that;
}})();