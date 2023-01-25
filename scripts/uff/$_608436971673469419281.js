(function(){{
    var ctx = contexts[defContextName];
    return ctx.require[prop].apply(ctx, arguments);
}})();