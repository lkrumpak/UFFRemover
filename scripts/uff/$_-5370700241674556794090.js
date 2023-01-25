(function(){{
    if (error)
        error.call(options.context, model, resp, options);
    model.trigger('error', model, resp, options);
}})();