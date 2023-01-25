(function(){{
    var selectedValue, i, l;
    var options = component.getDOMNode().options;
    if (component.props.multiple) {
        selectedValue = {};
        for (i = 0, l = propValue.length; i < l; i++) {
            selectedValue['' + propValue[i]] = true;
        }
        for (i = 0, l = options.length; i < l; i++) {
            var selected = selectedValue.hasOwnProperty(options[i].value);
            if (options[i].selected !== selected) {
                options[i].selected = selected;
            }
        }
    } else {
        // Do not set `select.value` as exact behavior isn't consistent across all
        // browsers for all cases.
        selectedValue = '' + propValue;
        for (i = 0, l = options.length; i < l; i++) {
            if (options[i].value === selectedValue) {
                options[i].selected = true;
                return;
            }
        }
        if (options.length) {
            options[0].selected = true;
        }
    }
}})();