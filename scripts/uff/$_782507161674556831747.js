(function(){{
    var argument, marker = markerCreate();
    expectKeyword('throw');
    if (peekLineTerminator()) {
        throwError({}, Messages.NewlineAfterThrow);
    }
    argument = parseExpression();
    consumeSemicolon();
    return markerApply(marker, delegate.createThrowStatement(argument));
}})();