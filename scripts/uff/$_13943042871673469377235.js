(function(){{
    var params = {};
    // If we get a string, handle it.
    if (typeof ajaxOb === 'string') {
        // If there's a space, it's probably the type.
        var parts = ajaxOb.split(/\s+/);
        params.url = parts.pop();
        if (parts.length) {
            params.type = parts.pop();
        }
    } else {
        can.extend(params, ajaxOb);
    }
    // If we are a non-array object, copy to a new attrs.
    params.data = typeof data === 'object' && !can.isArray(data) ? can.extend(params.data || {}, data) : data;
    // Get the url with any templated values filled out.
    params.url = can.sub(params.url, params.data, true);
    return can.ajax(can.extend({
        type: type || 'post',
        dataType: dataType || 'json',
        success: success,
        error: error
    }, params));
}})();