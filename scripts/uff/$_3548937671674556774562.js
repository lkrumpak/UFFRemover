(function(){{
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ('undefined' != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a;
}})();