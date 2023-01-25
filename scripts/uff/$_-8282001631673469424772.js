(function(){{
    var param, body, marker = markerCreate();
    expectKeyword('catch');
    expect('(');
    if (match(')')) {
        throwUnexpected(lookahead);
    }
    param = parseExpression();
    // 12.14.1
    if (strict && param.type === Syntax.Identifier && isRestrictedWord(param.name)) {
        throwErrorTolerant({}, Messages.StrictCatchVariable);
    }
    expect(')');
    body = parseBlock();
    return markerApply(marker, delegate.createCatchClause(param, body));
}})();