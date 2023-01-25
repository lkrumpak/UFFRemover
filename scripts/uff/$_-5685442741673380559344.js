(function(){{
    var arrowExpr = {
        type: Syntax.ArrowFunctionExpression,
        id: null,
        params: params,
        defaults: defaults,
        body: body,
        rest: rest,
        generator: false,
        expression: expression
    };
    if (isAsync) {
        arrowExpr.async = true;
    }
    return arrowExpr;
}})();