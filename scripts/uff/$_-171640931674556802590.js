(function(){{
    var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
    // Use IE sourceIndex if available on both nodes
    if (diff) {
        return diff;
    }
    // Check if b follows a
    if (cur) {
        while (cur = cur.nextSibling) {
            if (cur === b) {
                return -1;
            }
        }
    }
    return a ? 1 : -1;
}})();