(function(){{
    var attr = el.getAttribute('can-value'), value = data.scope.computeData(attr, { args: [] }).compute;
    if (el.nodeName.toLowerCase() === 'input') {
        var trueValue, falseValue;
        if (el.type === 'checkbox') {
            if (hasAttribute(el, 'can-true-value')) {
                trueValue = data.scope.compute(el.getAttribute('can-true-value'));
            } else {
                trueValue = can.compute(true);
            }
            if (hasAttribute(el, 'can-false-value')) {
                falseValue = data.scope.compute(el.getAttribute('can-false-value'));
            } else {
                falseValue = can.compute(false);
            }
        }
        if (el.type === 'checkbox' || el.type === 'radio') {
            new Checked(el, {
                value: value,
                trueValue: trueValue,
                falseValue: falseValue
            });
            return;
        }
    }
    new Value(el, { value: value });
}})();