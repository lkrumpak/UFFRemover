(function(){{
    return node.type === Syntax.TypeParameterDeclaration && path[0] && _isFunctionNode(path[0]) && node === path[0].typeParameters;
}})();