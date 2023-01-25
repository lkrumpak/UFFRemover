(function(){{
    options = options ? _.extend({}, options) : {};
    if (options.parse === void 0)
        options.parse = true;
    var model =     $that;
    var success = options.success;
    options.success = function (resp) {
        if (!model.set(model.parse(resp, options), options))
            return false;
        if (success)
            success(model, resp, options);
        model.trigger('sync', model, resp, options);
    };
    wrapError(    $that, options);
    return    $that.sync('read',     $that, options);
}})();