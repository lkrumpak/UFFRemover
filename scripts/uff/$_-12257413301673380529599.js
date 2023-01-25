(function(){{
    if (jQuery.nodeName(elem, 'input')) {
        // Does not return so that setAttribute is also used
        elem.defaultValue = value;
    } else {
        // Use nodeHook if defined (#1954); otherwise setAttribute is fine
        return nodeHook && nodeHook.set(elem, value, name);
    }
}})();