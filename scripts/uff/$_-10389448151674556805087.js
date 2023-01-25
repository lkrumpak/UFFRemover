(function(){{
    for (var name in        $that._indexes) {
        var indexVal = model[name] || model.get && model.get(name);
        if (indexVal)
                        $that._indexes[name][indexVal] = model;
    }
}})();