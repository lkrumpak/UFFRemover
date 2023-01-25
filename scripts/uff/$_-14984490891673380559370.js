(function(){{
    var notInExpression = path[0].type === Syntax.ExpressionStatement;
    // Wrap a function into a grouping operator, if it's not
    // in the expression position.
    if (notInExpression) {
        utils.append('(', state);
    }
    utils.append('function', state);
    renderParams(traverse, node, path, state);
    // Skip arrow.
    utils.catchupWhiteSpace(node.body.range[0], state);
    var renderBody = node.body.type == Syntax.BlockStatement ? renderStatementBody : renderExpressionBody;
    path.unshift(node);
    renderBody(traverse, node, path, state);
    path.shift();
    // Bind the function only if `this` value is used
    // inside it or inside any sub-expression.
    var containsBindingSyntax = utils.containsChildMatching(node.body, function (node) {
        return node.type === Syntax.ThisExpression || node.type === Syntax.Identifier && node.name === 'super';
    });
    if (containsBindingSyntax) {
        utils.append('.bind(this)', state);
    }
    utils.catchupWhiteSpace(node.range[1], state);
    // Close wrapper if not in the expression.
    if (notInExpression) {
        utils.append(')', state);
    }
    return false;
}})();