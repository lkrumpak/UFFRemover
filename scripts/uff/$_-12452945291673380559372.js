(function(){{
    if (!path[0] || !path[1]) {
        return;
    }
    var parentFuncExpr = path[0];
    var parentClassMethod = path[1];
    return parentFuncExpr.type === Syntax.FunctionExpression && parentClassMethod.type === Syntax.MethodDefinition && node.type === Syntax.Identifier;
}})();