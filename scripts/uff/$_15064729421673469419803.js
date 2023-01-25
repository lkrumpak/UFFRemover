(function(){{
    var keys = model.flags[flag];
    if (!keys) {
        keys = model.flags[flag] = [];
    }
    if (!ArrayUtils.contains(keys, name)) {
        keys.push(name);
    }
}})();