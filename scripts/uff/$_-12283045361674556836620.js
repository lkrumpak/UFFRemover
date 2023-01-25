(function(){{
    options = options ? _.clone(options) : {};
    var wait = options.wait;
    model =     $that._prepareModel(model, options);
    if (!model)
        return false;
    if (!wait)
                $that.add(model, options);
    var collection =     $that;
    var success = options.success;
    options.success = function (model, resp, callbackOpts) {
        if (wait)
            collection.add(model, callbackOpts);
        if (success)
            success.call(callbackOpts.context, model, resp, callbackOpts);
    };
    model.save(null, options);
    return model;
}})();