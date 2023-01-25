(function(){{
    if (!support.radioValue && value === 'radio' && jQuery.nodeName(elem, 'input')) {
        var val = elem.value;
        elem.setAttribute('type', value);
        if (val) {
            elem.value = val;
        }
        return value;
    }
}})();