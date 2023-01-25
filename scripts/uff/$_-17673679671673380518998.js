(function(){{
    // Exit early if the nodes are identical
    if (a === b) {
        hasDuplicate = true;
        return 0;
    }
    var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
    // Parentless nodes are either documents or disconnected
    if (!aup || !bup) {
        return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;    // If the nodes are siblings, we can do a quick check
    } else if (aup === bup) {
        return siblingCheck(a, b);
    }
    // Otherwise we need full lists of their ancestors for comparison
    cur = a;
    while (cur = cur.parentNode) {
        ap.unshift(cur);
    }
    cur = b;
    while (cur = cur.parentNode) {
        bp.unshift(cur);
    }
    // Walk down the tree looking for a discrepancy
    while (ap[i] === bp[i]) {
        i++;
    }
    return i ? // Do a sibling check if the nodes have a common ancestor
    siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
    ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
}})();