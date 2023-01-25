(function(){{
    var test, body, oldInIteration, marker = markerCreate();
    expectKeyword('while');
    expect('(');
    test = parseExpression();
    expect(')');
    oldInIteration = state.inIteration;
    state.inIteration = true;
    body = parseStatement();
    state.inIteration = oldInIteration;
    return markerApply(marker, delegate.createWhileStatement(test, body));
}})();