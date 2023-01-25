(function(){{
    options = options ? _.extend({}, options) : {};
    var model =     $that;
    var success = options.success;
    var destroy = function () {
        model.trigger('destroy', model, model.collection, options);
    };
    options.success = function (resp) {
        if (options.wait || model.isNew())
            destroy();
        if (success)
            success(model, resp, options);
        if (!model.isNew())
            model.trigger('sync', model, resp, options);
    };
    if (        $that.isNew()) {
        options.success();
        return false;
    }
    wrapError(    $that, options);
    var xhr =     $that.sync('delete',     $that, options);
    if (!options.wait)
        destroy();
    return xhr;
}})();