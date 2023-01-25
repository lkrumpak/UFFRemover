(function(){{
    if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
    } else {
        elem.setAttribute(name, name);
    }
    return name;
}})();