(function(){{
    mod.usingExports = true;
    if (mod.map.isDefine) {
        if (mod.exports) {
            return defined[mod.map.id] = mod.exports;
        } else {
            return mod.exports = defined[mod.map.id] = {};
        }
    }
}})();