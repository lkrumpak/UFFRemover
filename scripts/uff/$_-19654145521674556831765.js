(function(){{
    var templateElements = node.quasis;
    utils.append('(', state);
    for (var ii = 0; ii < templateElements.length; ii++) {
        var templateElement = templateElements[ii];
        if (templateElement.value.raw !== '') {
            utils.append(getCookedValue(templateElement), state);
            if (!templateElement.tail) {
                // + between element and substitution
                utils.append(' + ', state);
            }
            // maintain line numbers
            utils.move(templateElement.range[0], state);
            utils.catchupNewlines(templateElement.range[1], state);
        } else {
            // templateElement.value.raw === ''
            // Concatenat adjacent substitutions, e.g. `${x}${y}`. Empty templates
            // appear before the first and after the last element - nothing to add in
            // those cases.
            if (ii > 0 && !templateElement.tail) {
                // + between substitution and substitution
                utils.append(' + ', state);
            }
        }
        utils.move(templateElement.range[1], state);
        if (!templateElement.tail) {
            var substitution = node.expressions[ii];
            if (substitution.type === Syntax.Identifier || substitution.type === Syntax.MemberExpression || substitution.type === Syntax.CallExpression) {
                utils.catchup(substitution.range[1], state);
            } else {
                utils.append('(', state);
                traverse(substitution, path, state);
                utils.catchup(substitution.range[1], state);
                utils.append(')', state);
            }
            // if next templateElement isn't empty...
            if (templateElements[ii + 1].value.cooked !== '') {
                utils.append(' + ', state);
            }
        }
    }
    utils.move(node.range[1], state);
    utils.append(')', state);
    return false;
}})();