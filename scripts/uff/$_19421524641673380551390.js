(function(){{
    if (!identifiers[str]) {
        identifiers[str] = function (item) {
            return item[str];
        };
    }
    return identifiers[str];
}})();