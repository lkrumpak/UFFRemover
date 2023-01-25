(function(){{
    if (typeof target === 'undefined') {
        throw new Error(1100);
    }
    if (typeof outlet === 'undefined') {
        throw new Error(1101);
    }
    delete    $that._outlets[target][outlet];
    return    $that;
}})();