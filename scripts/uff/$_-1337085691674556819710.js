(function(){{
    var model = data instanceof        $that.TModel ? data :         $that.TModel.prototype instanceof Collection ? new        $that.TModel(data[        $that.TModel.prototype.itemsProperty], data) : new        $that.TModel(data), index = ArrayUtils.indexOf(        $that.models, model);
    if (index === -1) {
        model.on('change',         $that.onItemEvent,         $that).on('invalid',         $that.onItemEvent,         $that).on('saveSuccess',         $that.onItemEvent,         $that).on('saveError',         $that.onItemEvent,         $that);
    }
    return model;
}})();