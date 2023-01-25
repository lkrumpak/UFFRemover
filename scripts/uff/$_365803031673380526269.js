(function(){{
    var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = jQuery.contains(elem.ownerDocument, elem);
    // Fix IE cloning issues
    if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0, l = srcElements.length; i < l; i++) {
            fixInput(srcElements[i], destElements[i]);
        }
    }
    // Copy the events from the original to the clone
    if (dataAndEvents) {
        if (deepDataAndEvents) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone);
            for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
            }
        } else {
            cloneCopyEvent(elem, clone);
        }
    }
    // Preserve script evaluation history
    destElements = getAll(clone, 'script');
    if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, 'script'));
    }
    // Return the cloned set
    return clone;
}})();