(function(){{
    var matches = _.matches(attrs);
    return    $that[first ? 'find' : 'filter'](function (model) {
        return matches(model.attributes);
    });
}})();