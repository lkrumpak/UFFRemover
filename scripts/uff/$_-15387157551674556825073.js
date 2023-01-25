(function(){{
    if (node.type === Syntax.Identifier && _shouldMungeIdentifier(node, state)) {
        // Always munge non-computed properties of MemberExpressions
        // (a la preventing access of properties of unowned objects)
        if (path[0].type === Syntax.MemberExpression && path[0].object !== node && path[0].computed === false) {
            return true;
        }
        // Always munge identifiers that were declared within the method function
        // scope
        if (utils.identWithinLexicalScope(node.name, state, state.methodFuncNode)) {
            return true;
        }
        // Always munge private keys on object literals defined within a method's
        // scope.
        if (path[0].type === Syntax.Property && path[1].type === Syntax.ObjectExpression) {
            return true;
        }
        // Always munge function parameters
        if (path[0].type === Syntax.FunctionExpression || path[0].type === Syntax.FunctionDeclaration || path[0].type === Syntax.ArrowFunctionExpression) {
            for (var i = 0; i < path[0].params.length; i++) {
                if (path[0].params[i] === node) {
                    return true;
                }
            }
        }
    }
    return false;
}})();