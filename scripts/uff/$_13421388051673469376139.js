(function(){{
    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
    while (i--) {
        option = options[i];
        if (option.selected = jQuery.inArray(option.value, values) >= 0) {
            optionSet = true;
        }
    }
    // Force browsers to behave consistently when non-matching value is set
    if (!optionSet) {
        elem.selectedIndex = -1;
    }
    return values;
}})();