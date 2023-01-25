(function(){{
    var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body),
        // getDefaultComputedStyle might be reliably used only on attached element
        display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? // Use of this method is a temporary fix (more like optimization) until something better comes along,
        // since it was removed from specification and supported only in FF
        style.display : jQuery.css(elem[0], 'display');
    // We don't have any data stored on the element,
    // so use "detach" method as fast way to get rid of the element
    elem.detach();
    return display;
}})();