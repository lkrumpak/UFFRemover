(function(){{
    if (mod.require) {
        return mod.require;
    } else {
        return mod.require = context.makeRequire(mod.map);
    }
}})();