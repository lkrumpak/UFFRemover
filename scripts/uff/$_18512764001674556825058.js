(function(){{
    var init, test, update, left, right, body, operator, oldInIteration, marker = markerCreate();
    init = test = update = null;
    expectKeyword('for');
    // http://wiki.ecmascript.org/doku.php?id=proposals:iterators_and_generators&s=each
    if (matchContextualKeyword('each')) {
        throwError({}, Messages.EachNotAllowed);
    }
    expect('(');
    if (match(';')) {
        lex();
    } else {
        if (matchKeyword('var') || matchKeyword('let') || matchKeyword('const')) {
            state.allowIn = false;
            init = parseForVariableDeclaration();
            state.allowIn = true;
            if (init.declarations.length === 1) {
                if (matchKeyword('in') || matchContextualKeyword('of')) {
                    operator = lookahead;
                    if (!((operator.value === 'in' || init.kind !== 'var') && init.declarations[0].init)) {
                        lex();
                        left = init;
                        right = parseExpression();
                        init = null;
                    }
                }
            }
        } else {
            state.allowIn = false;
            init = parseExpression();
            state.allowIn = true;
            if (matchContextualKeyword('of')) {
                operator = lex();
                left = init;
                right = parseExpression();
                init = null;
            } else if (matchKeyword('in')) {
                // LeftHandSideExpression
                if (!isAssignableLeftHandSide(init)) {
                    throwError({}, Messages.InvalidLHSInForIn);
                }
                operator = lex();
                left = init;
                right = parseExpression();
                init = null;
            }
        }
        if (typeof left === 'undefined') {
            expect(';');
        }
    }
    if (typeof left === 'undefined') {
        if (!match(';')) {
            test = parseExpression();
        }
        expect(';');
        if (!match(')')) {
            update = parseExpression();
        }
    }
    expect(')');
    oldInIteration = state.inIteration;
    state.inIteration = true;
    if (!(opts !== undefined && opts.ignoreBody)) {
        body = parseStatement();
    }
    state.inIteration = oldInIteration;
    if (typeof left === 'undefined') {
        return markerApply(marker, delegate.createForStatement(init, test, update, body));
    }
    if (operator.value === 'in') {
        return markerApply(marker, delegate.createForInStatement(left, right, body));
    }
    return markerApply(marker, delegate.createForOfStatement(left, right, body));
}})();