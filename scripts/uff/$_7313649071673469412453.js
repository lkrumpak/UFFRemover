(function(){{
    //Normalize the structure
    if (isArray(value)) {
        value = { deps: value };
    }
    if ((value.exports || value.init) && !value.exportsFn) {
        value.exportsFn = context.makeShimExports(value);
    }
    shim[id] = value;
}})();