(function(){{
    var label = null, marker = markerCreate();
    expectKeyword('break');
    // Catch the very common case first: immediately a semicolon (char #59).
    if (source.charCodeAt(index) === 59) {
        lex();
        if (!(state.inIteration || state.inSwitch)) {
            throwError({}, Messages.IllegalBreak);
        }
        return markerApply(marker, delegate.createBreakStatement(null));
    }
    if (peekLineTerminator()) {
        if (!(state.inIteration || state.inSwitch)) {
            throwError({}, Messages.IllegalBreak);
        }
        return markerApply(marker, delegate.createBreakStatement(null));
    }
    if (lookahead.type === Token.Identifier) {
        label = parseVariableIdentifier();
        if (!state.labelSet.has(label.name)) {
            throwError({}, Messages.UnknownLabel, label.name);
        }
    }
    consumeSemicolon();
    if (label === null && !(state.inIteration || state.inSwitch)) {
        throwError({}, Messages.IllegalBreak);
    }
    return markerApply(marker, delegate.createBreakStatement(label));
}})();