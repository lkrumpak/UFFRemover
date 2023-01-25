(function(){{
    return node.type === Syntax.MemberExpression && node.property.type === Syntax.Identifier && reserverdWordsHelper.isES3ReservedWord(node.property.name);
}})();