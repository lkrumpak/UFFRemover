(function(){{
    var iterator = typeof value === 'function' ? value : function (model) {
        return model.get(value);
    };
    return _[method](    $that.models, iterator, context);
}})();