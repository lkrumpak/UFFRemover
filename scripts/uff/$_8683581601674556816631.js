(function(){{
    var bitmask;
    if (node.compareDocumentPosition) {
        bitmask = node.compareDocumentPosition(otherNode);
        return bitmask & 2 ? 1 : -1;
    }
    return sortByItemPosition(node, otherNode);
}})();