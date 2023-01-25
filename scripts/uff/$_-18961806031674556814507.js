(function(){{
        $that._byId[model.cid] = model;
    if (model.id != null)
                $that._byId[model.id] = model;
    if (!model.collection)
        model.collection =         $that;
    model.on('all',     $that._onModelEvent,     $that);
}})();