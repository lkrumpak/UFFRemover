(function(){{
    return node.type === Syntax.Identifier && node.optional && path[0] && _isFunctionNode(path[0]);
}})();