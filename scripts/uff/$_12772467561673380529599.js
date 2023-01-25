(function(){{
    if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
    } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
        // IE<8 needs the *property* name
        elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);    // Use defaultChecked and defaultSelected for oldIE
    } else {
        elem[jQuery.camelCase('default-' + name)] = elem[name] = true;
    }
    return name;
}})();