(function(){{
    options = options ? _.extend({}, options) : {};
    if (!(model =         $that._prepareModel(model, options)))
        return false;
    if (!options.wait)
                $that.add(model, options);
    var collection =     $that;
    var success = options.success;
    options.success = function (model, resp) {
        if (options.wait)
            collection.add(model, options);
        if (success)
            success(model, resp, options);
    };
    model.save(null, options);
    return model;
}})();