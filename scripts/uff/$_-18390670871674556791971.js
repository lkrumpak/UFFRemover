(function(){{
    var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
}})();