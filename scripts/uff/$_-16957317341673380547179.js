(function(){{
    var mod = getOwn(registry, pluginMap.id);
    if (mod && !mod.enabled) {
        context.enable(pluginMap,         $that);
    }
}})();