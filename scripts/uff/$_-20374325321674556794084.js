(function(){{
    options = _.extend({}, options);
    var singular = !_.isArray(models);
    models = singular ? [models] : _.clone(models);
    var removed =     $that._removeModels(models, options);
    if (!options.silent && removed)
                $that.trigger('update',         $that, options);
    return singular ? removed[0] : removed;
}})();