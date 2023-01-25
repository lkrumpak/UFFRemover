(function(){{
    return node.type === Syntax.Property && node.value.type === Syntax.FunctionExpression && node.method === true;
}})();