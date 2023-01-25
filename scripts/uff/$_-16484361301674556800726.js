(function(){{
    /* istanbul ignore if */
    if (plugin.installed) {
        return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(    $that);
    if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
    } else {
        plugin.apply(null, args);
    }
    plugin.installed = true;
    return    $that;
}})();