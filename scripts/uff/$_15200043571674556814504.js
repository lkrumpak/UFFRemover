(function(){{
    var attrs, method, xhr, attributes =         $that.attributes;
    // Handle both `"key", value` and `{key: value}` -style arguments.
    if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
    } else {
        (attrs = {})[key] = val;
    }
    options = _.extend({ validate: true }, options);
    // If we're not waiting and attributes exist, save acts as
    // `set(attr).save(null, opts)` with validation. Otherwise, check if
    // the model will be valid when the attributes, if any, are set.
    if (attrs && !options.wait) {
        if (!            $that.set(attrs, options))
            return false;
    } else {
        if (!            $that._validate(attrs, options))
            return false;
    }
    // Set temporary attributes if `{wait: true}`.
    if (attrs && options.wait) {
                $that.attributes = _.extend(Object.create(null), attributes, attrs);
    }
    // After a successful server-side save, the client is (optionally)
    // updated with the server-side state.
    if (options.parse === void 0)
        options.parse = true;
    var model =     $that;
    var success = options.success;
    options.success = function (resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait)
            serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (serverAttrs && typeof serverAttrs === 'object' && !model.set(serverAttrs, options)) {
            return false;
        }
        if (success)
            success(model, resp, options);
        model.trigger('sync', model, resp, options);
    };
    wrapError(    $that, options);
    method =     $that.isNew() ? 'create' : options.patch ? 'patch' : 'update';
    if (method === 'patch')
        options.attrs = attrs;
    xhr =     $that.sync(method,     $that, options);
    // Restore attributes.
    if (attrs && options.wait)
                $that.attributes = attributes;
    return xhr;
}})();