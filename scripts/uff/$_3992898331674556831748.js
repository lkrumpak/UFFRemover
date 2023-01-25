(function(){{
    var expr, marker = markerCreate();
    expectContextualKeyword('await');
    expr = parseAssignmentExpression();
    return markerApply(marker, delegate.createAwaitExpression(expr));
}})();