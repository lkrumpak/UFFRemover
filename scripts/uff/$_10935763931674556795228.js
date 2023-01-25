(function(){{
    var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
    if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
            propName = jQuery.propFix[name] || name;
            // Boolean attributes get special treatment (#10870)
            if (jQuery.expr.match.bool.test(name)) {
                // Set corresponding property to false
                if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                    elem[propName] = false;    // Support: IE<9
                                               // Also clear defaultChecked/defaultSelected (if appropriate)
                } else {
                    elem[jQuery.camelCase('default-' + name)] = elem[propName] = false;
                }    // See #9699 for explanation of this approach (setting first, then removal)
            } else {
                jQuery.attr(elem, name, '');
            }
            elem.removeAttribute(getSetAttribute ? name : propName);
        }
    }
}})();