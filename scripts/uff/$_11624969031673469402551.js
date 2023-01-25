(function(){{
    var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
    if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
            propName = jQuery.propFix[name] || name;
            // Boolean attributes get special treatment (#10870)
            if (jQuery.expr.match.bool.test(name)) {
                // Set corresponding property to false
                elem[propName] = false;
            }
            elem.removeAttribute(name);
        }
    }
}})();