(function(){{
    var object, body, marker = markerCreate();
    if (strict) {
        throwErrorTolerant({}, Messages.StrictModeWith);
    }
    expectKeyword('with');
    expect('(');
    object = parseExpression();
    expect(')');
    body = parseStatement();
    return markerApply(marker, delegate.createWithStatement(object, body));
}})();