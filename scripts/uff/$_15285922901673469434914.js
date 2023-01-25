(function(){{
    return elem.hasAttribute('tabindex') || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
}})();