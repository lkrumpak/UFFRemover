(function(){{
    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === 'select-one' || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
    // Loop through all the selected options
    for (; i < max; i++) {
        option = options[i];
        // IE6-9 doesn't update selected after form reset (#2551)
        if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute('disabled') === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, 'optgroup'))) {
            // Get the specific value for the option
            value = jQuery(option).val();
            // We don't need an array for one selects
            if (one) {
                return value;
            }
            // Multi-Selects return an array
            values.push(value);
        }
    }
    return values;
}})();