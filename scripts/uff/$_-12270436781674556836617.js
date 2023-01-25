(function(){{
    options = options ? _.clone(options) : {};
    var model =     $that;
    var success = options.success;
    var wait = options.wait;
    var destroy = function () {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
    };
    options.success = function (resp) {
        if (wait)
            destroy();
        if (success)
            success.call(options.context, model, resp, options);
        if (!model.isNew())
            model.trigger('sync', model, resp, options);
    };
    var xhr = false;
    if (        $that.isNew()) {
        _.defer(options.success);
    } else {
        wrapError(        $that, options);
        xhr =         $that.sync('delete',         $that, options);
    }
    if (!wait)
        destroy();
    return xhr;
}})();