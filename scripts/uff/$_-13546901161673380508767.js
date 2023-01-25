(function(){{
    return a ? 'class' == b ? a.className || '' : 'for' == b ? a.htmlFor || '' : 'style' == b ? a.style.cssText || '' : (Da ? a.getAttribute(b) : a.getAttribute(b, 2)) || '' : '';
}})();