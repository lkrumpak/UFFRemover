(function(){{
    {
        el.children.some(checkOptionWarning);
    }
    var number = modifiers && modifiers.number;
    var assignment = 'Array.prototype.filter' + '.call($event.target.options,function(o){return o.selected})' + '.map(function(o){var val = "_value" in o ? o._value : o.value;' + 'return ' + (number ? '_n(val)' : 'val') + '})' + (el.attrsMap.multiple == null ? '[0]' : '');
    var code = genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
}})();