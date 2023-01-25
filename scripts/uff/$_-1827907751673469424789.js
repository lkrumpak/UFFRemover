(function(){{
    return node.type === Syntax.VariableDeclarator && isStructuredPattern(node.id);
}})();