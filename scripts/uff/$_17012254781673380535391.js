(function(){{
    if ('development' !== 'production' && el.attrsMap.checked != null) {
        warn$3('<' + el.tag + ' v-model="' + value + '" checked>:\n' + 'inline checked attributes will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
    }
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? '_n(' + valueBinding + ')' : valueBinding;
    addProp(el, 'checked', '_q(' + value + ',' + valueBinding + ')');
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}})();