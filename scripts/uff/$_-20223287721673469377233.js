(function(){{
    if (console !== undefined) {
        if (!options) {
            console.log(expr.context);
        } else {
            console.log(expr, options.context);
        }
    }
}})();