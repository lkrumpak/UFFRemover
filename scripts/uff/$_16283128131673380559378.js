(function(){{
    var rightType = node.type === Syntax.ObjectPattern || node.type === Syntax.ArrayPattern;
    return rightType && node.typeAnnotation;
}})();