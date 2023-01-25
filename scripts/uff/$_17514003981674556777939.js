(function(){{
    // Get the template name and call back into the render method,
    // passing the name and the current context.
    var templateName = can.trim(content.replace(/^>\s?/, '')).replace(/["|']/g, '');
    return 'can.Mustache.renderPartial(\'' + templateName + '\',' + ARG_NAMES + ')';
}})();