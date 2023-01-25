(function(){{
    var partial = options.attr('partials.' + partialName);
    if (partial) {
        return partial.render ? partial.render(scope, options) : partial(scope, options);
    } else {
        return can.Mustache.render(partialName, scope, options);
    }
}})();