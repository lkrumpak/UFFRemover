(function(){{
    for (var name in        $that._indexes) {
        delete        $that._indexes[name][model[name] || model.get && model.get(name)];
    }
}})();