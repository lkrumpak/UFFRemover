(function(){{
        $that._addFilter(function (model) {
        return (model.get ? model.get(item) : model[item]) === value;
    });
}})();