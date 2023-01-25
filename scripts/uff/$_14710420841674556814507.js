(function(){{
    if ((event === 'add' || event === 'remove') && collection !==        $that)
        return;
    if (event === 'destroy')
                $that.remove(model, options);
    if (model && event === 'change:' + model.idAttribute) {
        delete        $that._byId[model.previous(model.idAttribute)];
        if (model.id != null)
                        $that._byId[model.id] = model;
    }
        $that.trigger.apply(    $that, arguments);
}})();