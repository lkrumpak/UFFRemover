(function(){{
    if (obj == null)
        return void 0;
    return    $that._byId[obj] ||    $that._byId[obj.id] ||    $that._byId[obj.cid];
}})();