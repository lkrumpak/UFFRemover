(function(){{
    //If module already has init called, since it is too
    //late to modify them, and ignore unnormalized ones
    //since they are transient.
    if (!mod.inited && !mod.map.unnormalized) {
        mod.map = makeModuleMap(id);
    }
}})();