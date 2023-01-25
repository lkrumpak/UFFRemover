(function(){{
        $that._byId[model.cid] = model;
    var id =     $that.modelId(model.attributes);
    if (id != null)
                $that._byId[id] = model;
    model.on('all',     $that._onModelEvent,     $that);
}})();