(function(){{
    return state.superClass && node.type === Syntax.MemberExpression && node.object.type === Syntax.Identifier && node.object.name === 'super';
}})();