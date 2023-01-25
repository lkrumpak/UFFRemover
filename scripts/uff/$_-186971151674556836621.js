(function(){{
    if ((event === 'add' || event === 'remove') && collection !==        $that)
        return;
    if (event === 'destroy')
                $that.remove(model, options);
    if (event === 'change') {
        var prevId =         $that.modelId(model.previousAttributes());
        var id =         $that.modelId(model.attributes);
        if (prevId !== id) {
            if (prevId != null)
                delete                $that._byId[prevId];
            if (id != null)
                                $that._byId[id] = model;
        }
    }
        $that.trigger.apply(    $that, arguments);
}})();