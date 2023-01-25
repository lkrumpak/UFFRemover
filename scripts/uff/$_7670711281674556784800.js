(function(){{
    // Flag for duplicate removal
    if (a === b) {
        hasDuplicate = true;
        return 0;
    }
    // Sort on method existence if only one input has compareDocumentPosition
    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
    if (compare) {
        return compare;
    }
    // Calculate position if both inputs belong to the same document
    compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
    1;
    // Disconnected nodes
    if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
        // Choose the first element that is related to our preferred document
        if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
        }
        if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
        }
        // Maintain original order
        return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
    }
    return compare & 4 ? -1 : 1;
}})();