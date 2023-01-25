(function(){{
    loop(source, function (value, idx) {
        if (!destination[idx] || !dontOverride) {
            destination[idx] = source[idx];
        }
    });
    return destination;
}})();