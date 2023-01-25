(function(){{
    if (!data || typeof data !== 'string') {
        return null;
    }
    if (typeof context === 'boolean') {
        keepScripts = context;
        context = false;
    }
    context = context || document;
    var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
    // Single tag
    if (parsed) {
        return [context.createElement(parsed[1])];
    }
    parsed = jQuery.buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
        jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
}})();