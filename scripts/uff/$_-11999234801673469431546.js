(function(){{
    var block, handlers = [], finalizer = null, marker = markerCreate();
    expectKeyword('try');
    block = parseBlock();
    if (matchKeyword('catch')) {
        handlers.push(parseCatchClause());
    }
    if (matchKeyword('finally')) {
        lex();
        finalizer = parseBlock();
    }
    if (handlers.length === 0 && !finalizer) {
        throwError({}, Messages.NoCatchOrFinally);
    }
    return markerApply(marker, delegate.createTryStatement(block, [], handlers, finalizer));
}})();