(function(){{
    if (error)
        error(model, resp, options);
    model.trigger('error', model, resp, options);
}})();