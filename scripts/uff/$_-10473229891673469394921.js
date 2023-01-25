(function(){{
    // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
    // Use proper attribute retrieval(#12072)
    var tabindex = jQuery.find.attr(elem, 'tabindex');
    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
}})();