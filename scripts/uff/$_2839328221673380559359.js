(function(){{
    var delegateFlag, expr, marker = markerCreate();
    expectKeyword('yield', !strict);
    delegateFlag = false;
    if (match('*')) {
        lex();
        delegateFlag = true;
    }
    expr = parseAssignmentExpression();
    return markerApply(marker, delegate.createYieldExpression(expr, delegateFlag));
}})();