(function(){{
    var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
    if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test('<' + elem.nodeName + '>')) {
        clone = elem.cloneNode(true);    // IE<=8 does not properly clone detached, unknown element nodes
    } else {
        fragmentDiv.innerHTML = elem.outerHTML;
        fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
    }
    if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);
        // Fix all IE cloning issues
        for (i = 0; (node = srcElements[i]) != null; ++i) {
            // Ensure that the destination node is not null; Fixes #9587
            if (destElements[i]) {
                fixCloneNodeIssues(node, destElements[i]);
            }
        }
    }
    // Copy the events from the original to the clone
    if (dataAndEvents) {
        if (deepDataAndEvents) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone);
            for (i = 0; (node = srcElements[i]) != null; i++) {
                cloneCopyEvent(node, destElements[i]);
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
    destElements = srcElements = node = null;
    // Return the cloned set
    return clone;
}})();