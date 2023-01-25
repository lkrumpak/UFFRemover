(function(){{
    return (node.type === Syntax.CallExpression || node.type === Syntax.NewExpression) && node.arguments.length > 0 && node.arguments[node.arguments.length - 1].type === Syntax.SpreadElement;
}})();