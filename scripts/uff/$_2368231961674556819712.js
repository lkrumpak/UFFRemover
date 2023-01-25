(function(){{
    var model = e.target, index = ArrayUtils.indexOf(        $that.models, model);
    if (e.type === 'change') {
        ArrayUtils.pushIfNotExists(        $that.changedItems, model);
    } else if (e.type === 'saveSuccess') {
        ArrayUtils.remove(        $that.changedItems, model);
    }
        $that.trigger(e.type + 'Item', merge({}, e, {
        target: model,
        model: model,
        index: index,
        previousIndex: null
    }));
}})();