(function(){{
    return node.type === Syntax.Property && node.key.type === Syntax.Identifier && !node.method && !node.shorthand && !node.computed && reserverdWordsHelper.isES3ReservedWord(node.key.name);
}})();