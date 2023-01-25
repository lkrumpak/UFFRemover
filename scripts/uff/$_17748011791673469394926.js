(function(){{
    // shift arguments if data argument was omitted
    if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
    }
    return jQuery.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
    });
}})();