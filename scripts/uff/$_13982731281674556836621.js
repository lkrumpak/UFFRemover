(function(){{
    delete    $that._byId[model.cid];
    var id =     $that.modelId(model.attributes);
    if (id != null)
        delete        $that._byId[id];
    if (        $that === model.collection)
        delete model.collection;
    model.off('all',     $that._onModelEvent,     $that);
}})();