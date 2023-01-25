(function(){{
    // Get all the resolved deferreds.
    var objs = makeArray(arguments),
        // Renderer is the last index of the data.
        renderer = objs.pop(),
        // The result of the template rendering with data.
        result;
    // Make data look like the resolved deferreds.
    if (can.isDeferred(data)) {
        dataCopy = usefulPart(resolved);
    } else {
        // Go through each prop in data again and
        // replace the defferreds with what they resolved to.
        for (var prop in data) {
            if (can.isDeferred(data[prop])) {
                dataCopy[prop] = usefulPart(objs.shift());
            }
        }
    }
    // Get the rendered result.
    result = renderer(dataCopy, helpers);
    // Resolve with the rendered view.
    deferred.resolve(result, dataCopy);
    // If there's a `callback`, call it back with the result.
    if (callback) {
        callback(result, dataCopy);
    }
}})();