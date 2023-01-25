(function(){{
    if (!support.radioValue && value === 'radio' && jQuery.nodeName(elem, 'input')) {
        // Setting the type on a radio button after the value resets the value in IE6-9
        // Reset value to default in case type is set after value during creation
        var val = elem.value;
        elem.setAttribute('type', value);
        if (val) {
            elem.value = val;
        }
        return value;
    }
}})();