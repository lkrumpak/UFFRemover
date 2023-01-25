(function(){{
    if (mod.module) {
        return mod.module;
    } else {
        return mod.module = {
            id: mod.map.id,
            uri: mod.map.url,
            config: function () {
                return getOwn(config.config, mod.map.id) || {};
            },
            exports: mod.exports || (mod.exports = {})
        };
    }
}})();