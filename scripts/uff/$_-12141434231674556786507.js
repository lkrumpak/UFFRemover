(function(){{
    if (typeof key === 'undefined') {
        throw new Error(1090);
    }
    delete    $that._mappings[key];
    return    $that;
}})();