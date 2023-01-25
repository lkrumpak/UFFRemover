(function(){{
    var ctx = expr;
    expr = Mustache.resolve(expr);
    if (!!expr) {
        return options.fn(ctx);
    }
}})();