(function(){{
    var id, implemented, previousYieldAllowed, superClass = null, superTypeParameters, marker = markerCreate(), typeParameters, matchImplements;
    expectKeyword('class');
    matchImplements = strict ? matchKeyword('implements') : matchContextualKeyword('implements');
    if (!matchKeyword('extends') && !matchImplements && !match('{')) {
        id = parseVariableIdentifier();
    }
    if (match('<')) {
        typeParameters = parseTypeParameterDeclaration();
    }
    if (matchKeyword('extends')) {
        expectKeyword('extends');
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = false;
        superClass = parseLeftHandSideExpressionAllowCall();
        if (match('<')) {
            superTypeParameters = parseTypeParameterInstantiation();
        }
        state.yieldAllowed = previousYieldAllowed;
    }
    if (strict ? matchKeyword('implements') : matchContextualKeyword('implements')) {
        implemented = parseClassImplements();
    }
    return markerApply(marker, delegate.createClassExpression(id, superClass, parseClassBody(), typeParameters, superTypeParameters, implemented));
}})();