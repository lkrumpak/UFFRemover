(function(){{
    var singular = !Array.isArray(models);
    models = singular ? [models] : models.slice();
    options || (options = {});
    var i, l, index, model;
    for (i = 0, l = models.length; i < l; i++) {
        model = models[i] =         $that.get(models[i]);
        if (!model)
            continue;
        delete        $that._byId[model.id];
        delete        $that._byId[model.cid];
        index =         $that.indexOf(model);
                $that.models.splice(index, 1);
                $that.length--;
        if (!options.silent) {
            options.index = index;
            model.trigger('remove', model,             $that, options);
        }
                $that._removeReference(model, options);
    }
    return singular ? models[0] : models;
}})();