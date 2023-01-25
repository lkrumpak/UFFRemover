(function(){{
        $that.inited = true;
        $that.error = err;
    err.requireModules = [id];
    //Remove temp unnormalized modules for this module,
    //since they will never be resolved otherwise now.
    eachProp(registry, function (mod) {
        if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
            cleanRegistry(mod.map.id);
        }
    });
    onError(err);
}})();