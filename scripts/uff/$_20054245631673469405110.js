(function(){{
    var iterator = _.isFunction(value) ? value : function (model) {
        return model.get ? model.get(value) : model[value];
    };
    return _[method](    $that.models, iterator, context);
}})();