(function(){{
    var value, checkboxes, checkbox, len, i, rootEl;
    value = [];
    rootEl = ractive.rendered ? ractive.el : ractive.fragment.docFrag;
    checkboxes = rootEl.querySelectorAll('input[type="checkbox"][name="{{' + keypath + '}}"]');
    len = checkboxes.length;
    for (i = 0; i < len; i += 1) {
        checkbox = checkboxes[i];
        if (checkbox.hasAttribute('checked') || checkbox.checked) {
            value[value.length] = checkbox._ractive.value;
        }
    }
    return value;
}})();