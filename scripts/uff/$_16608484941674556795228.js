(function(){{
    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
    while (i--) {
        option = options[i];
        if (jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) {
            // Support: IE6
            // When new option element is added to select box we need to
            // force reflow of newly added node in order to workaround delay
            // of initialization properties
            try {
                option.selected = optionSet = true;
            } catch (_) {
                // Will be executed only in IE6
                option.scrollHeight;
            }
        } else {
            option.selected = false;
        }
    }
    // Force browsers to behave consistently when non-matching value is set
    if (!optionSet) {
        elem.selectedIndex = -1;
    }
    return options;
}})();