(function(){{
    options = options ? _.clone(options) : {};
    for (var i = 0; i <        $that.models.length; i++) {
                $that._removeReference(        $that.models[i], options);
    }
    options.previousModels =     $that.models;
        $that._reset();
    models =     $that.add(models, _.extend({ silent: true }, options));
    if (!options.silent)
                $that.trigger('reset',         $that, options);
    return models;
}})();