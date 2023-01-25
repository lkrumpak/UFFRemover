(function(){{
    var id, body, token, tmp, firstRestricted, message, generator, isAsync, previousStrict, previousYieldAllowed, previousAwaitAllowed, marker = markerCreate(), typeParameters;
    isAsync = false;
    if (matchAsync()) {
        lex();
        isAsync = true;
    }
    expectKeyword('function');
    generator = false;
    if (match('*')) {
        lex();
        generator = true;
    }
    token = lookahead;
    id = parseVariableIdentifier();
    if (match('<')) {
        typeParameters = parseTypeParameterDeclaration();
    }
    if (strict) {
        if (isRestrictedWord(token.value)) {
            throwErrorTolerant(token, Messages.StrictFunctionName);
        }
    } else {
        if (isRestrictedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictFunctionName;
        } else if (isStrictModeReservedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictReservedWord;
        }
    }
    tmp = parseParams(firstRestricted);
    firstRestricted = tmp.firstRestricted;
    if (tmp.message) {
        message = tmp.message;
    }
    previousStrict = strict;
    previousYieldAllowed = state.yieldAllowed;
    state.yieldAllowed = generator;
    previousAwaitAllowed = state.awaitAllowed;
    state.awaitAllowed = isAsync;
    body = parseFunctionSourceElements();
    if (strict && firstRestricted) {
        throwError(firstRestricted, message);
    }
    if (strict && tmp.stricted) {
        throwErrorTolerant(tmp.stricted, message);
    }
    strict = previousStrict;
    state.yieldAllowed = previousYieldAllowed;
    state.awaitAllowed = previousAwaitAllowed;
    return markerApply(marker, delegate.createFunctionDeclaration(id, tmp.params, tmp.defaults, body, tmp.rest, generator, false, isAsync, tmp.returnType, typeParameters));
}})();