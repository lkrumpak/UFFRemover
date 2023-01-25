(function(){{
    options || (options = {});
    var type = methodMap[method];
    // Default JSON-request options.
    var params = {
        type: type,
        dataType: 'json'
    };
    // Ensure that we have a URL.
    if (!options.url) {
        params.url = _.result(model, 'url') || urlError();
    }
    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
        params.contentType = 'application/json';
        params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }
    // Don't process data on a non-GET request.
    if (params.type !== 'GET') {
        params.processData = false;
    }
    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
}})();