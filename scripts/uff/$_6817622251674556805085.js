(function(){{
    var singular = !isArray(models);
    var i, length, model, index;
    models = singular ? [models] : slice.call(models);
    options || (options = {});
    for (i = 0, length = models.length; i < length; i++) {
        model = models[i] =         $that.get(models[i]);
        if (!model)
            continue;
                $that._deIndex(model);
        index =         $that.models.indexOf(model);
                $that.models.splice(index, 1);
        if (!options.silent) {
            options.index = index;
            if (model.trigger) {
                model.trigger('remove', model,                 $that, options);
            } else {
                                $that.trigger('remove', model,                 $that, options);
            }
        }
                $that._removeReference(model, options);
    }
    return singular ? models[0] : models;
}})();