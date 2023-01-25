(function(){{
    if (!a)
        return [];
    if (a.constructor == Array)
        return a;
    if (!u(a))
        return [a];
    if (u(c) && (c = u(c) ? document.getElementById(c) : c, !c))
        return [];
    c = c || document;
    var e = c.ownerDocument || c.documentElement;
    Da = c.contentType && 'application/xml' == c.contentType || nb && (c.doctype || '[object XMLDocument]' == e.toString()) || !!e && (T ? e.xml : c.xmlVersion || e.xmlVersion);
    return (e = d(a)(c)) && e.xb ? e : b(e);
}})();