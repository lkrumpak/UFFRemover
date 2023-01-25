(function(){{
    if (obj == null)
        return void 0;
    var id =     $that.modelId(    $that._isModel(obj) ? obj.attributes : obj);
    return    $that._byId[obj] ||    $that._byId[id] ||    $that._byId[obj.cid];
}})();