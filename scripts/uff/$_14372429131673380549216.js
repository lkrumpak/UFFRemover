(function(){{
    Collection.prototype[method] = function (value, context) {
        var iterator = typeof value === 'function' ? value : function (model) {
            return model.get(value);
        };
        return _[method](this.models, iterator, context);
    };
}})();