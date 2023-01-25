(function(){{
    var n = !1, r = !1;
    if (aria.utils.Type.isObject(t))
        n = t.text === !0, r = t.attr === !0;
    else if (!aria.utils.Type.isBoolean(t) || t)
        n = !0, r = !0;
    return n && (e =     $that.escapeHTML(e).replace(/\//g, '&#x2F;')), r && (e =     $that.escapeHTMLAttr(e)), e;
}})();