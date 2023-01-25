(function(){{
    var removed = [];
    for (var i = 0; i < models.length; i++) {
        var model =         $that.get(models[i]);
        if (!model)
            continue;
        var index =         $that.indexOf(model);
                $that.models.splice(index, 1);
                $that.length--;
        if (!options.silent) {
            options.index = index;
            model.trigger('remove', model,             $that, options);
        }
        removed.push(model);
                $that._removeReference(model, options);
    }
    return removed.length ? removed : false;
}})();