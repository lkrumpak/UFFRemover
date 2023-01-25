(function(){{
    if (1 != a.nodeType)
        return !1;
    switch (a.tagName) {
    case 'APPLET':
    case 'AREA':
    case 'BASE':
    case 'BR':
    case 'COL':
    case 'COMMAND':
    case 'EMBED':
    case 'FRAME':
    case 'HR':
    case 'IMG':
    case 'INPUT':
    case 'IFRAME':
    case 'ISINDEX':
    case 'KEYGEN':
    case 'LINK':
    case 'NOFRAMES':
    case 'NOSCRIPT':
    case 'META':
    case 'OBJECT':
    case 'PARAM':
    case 'SCRIPT':
    case 'SOURCE':
    case 'STYLE':
    case 'TRACK':
    case 'WBR':
        return !1;
    }
    return !0;
}})();