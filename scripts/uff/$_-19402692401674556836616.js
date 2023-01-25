(function(){{
    // Handle both `"key", value` and `{key: value}` -style arguments.
    var attrs;
    if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
    } else {
        (attrs = {})[key] = val;
    }
    options = _.extend({
        validate: true,
        parse: true
    }, options);
    var wait = options.wait;
    // If we're not waiting and attributes exist, save acts as
    // `set(attr).save(null, opts)` with validation. Otherwise, check if
    // the model will be valid when the attributes, if any, are set.
    if (attrs && !wait) {
        if (!            $that.set(attrs, options))
            return false;
    } else {
        if (!            $that._validate(attrs, options))
            return false;
    }
    // After a successful server-side save, the client is (optionally)
    // updated with the server-side state.
    var model =     $that;
    var success = options.success;
    var attributes =     $that.attributes;
    options.success = function (resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait)
            serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options))
            return false;
        if (success)
            success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
    };
    wrapError(    $that, options);
    // Set temporary attributes if `{wait: true}` to properly find new ids.
    if (attrs && wait)
                $that.attributes = _.extend({}, attributes, attrs);
    var method =     $that.isNew() ? 'create' : options.patch ? 'patch' : 'update';
    if (method === 'patch' && !options.attrs)
        options.attrs = attrs;
    var xhr =     $that.sync(method,     $that, options);
    // Restore attributes.
        $that.attributes = attributes;
    return xhr;
}})();