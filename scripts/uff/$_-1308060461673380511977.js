(function(){{
    // If the ajax method has it's own way of getting `data`, use that.
    data = ajaxMethod.data ? ajaxMethod.data.apply(    $that, arguments) : // Otherwise use the data passed in.
    data;
    // Return the ajax method with `data` and the `type` provided.
    return ajax(str ||    $that[ajaxMethod.url || '_url'], data, ajaxMethod.type || 'get');
}})();