(function(){{
    options || (options = {});
    for (var i = 0, length =             $that.models.length; i < length; i++) {
                $that._removeReference(        $that.models[i], options);
    }
    options.previousModels =     $that.models;
        $that._reset();
    models =     $that.add(models, extend({ silent: true }, options));
    if (!options.silent)
                $that.trigger('reset',         $that, options);
    return models;
}})();