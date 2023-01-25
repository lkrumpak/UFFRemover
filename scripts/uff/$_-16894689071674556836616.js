(function(){{
    options = _.extend({ parse: true }, options);
    var model =     $that;
    var success = options.success;
    options.success = function (resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options))
            return false;
        if (success)
            success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
    };
    wrapError(    $that, options);
    return    $that.sync('read',     $that, options);
}})();