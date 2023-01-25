(function(){{
    var iterator = _.isFunction(value) ? value : function (model) {
        return model.get(value);
    };
    return _[method](    $that.models, iterator, context);
}})();