(function(){{
    if (state.superClass && node.type === Syntax.CallExpression) {
        var callee = node.callee;
        if (callee.type === Syntax.Identifier && callee.name === 'super' || callee.type == Syntax.MemberExpression && callee.object.name === 'super') {
            return true;
        }
    }
    return false;
}})();