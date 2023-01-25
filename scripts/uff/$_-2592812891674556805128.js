(function(){{
    if (_.isEmpty(attrs))
        return first ? void 0 : [];
    return    $that[first ? 'find' : 'filter'](function (model) {
        var value;
        for (var key in attrs) {
            value = model.get ? model.get(key) : model[key];
            if (attrs[key] !== value)
                return false;
        }
        return true;
    });
}})();