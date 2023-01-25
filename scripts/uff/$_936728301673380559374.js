(function(){{
    // We consider the expression statement rather than just assignment
    // expression to cover case with object patters which should be
    // wrapped in grouping operator: ({x, y} = {y, x});
    return node.type === Syntax.ExpressionStatement && node.expression.type === Syntax.AssignmentExpression && isStructuredPattern(node.expression.left);
}})();