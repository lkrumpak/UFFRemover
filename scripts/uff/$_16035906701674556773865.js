(function(){{
    var ret;
    if (value.init) {
        ret = value.init.apply(global, arguments);
    }
    return ret || value.exports && getGlobal(value.exports);
}})();