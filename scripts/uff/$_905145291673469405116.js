(function(){{
    getMatches(el, selector).forEach(function (match) {
        type(match, value, previousValue);
    });
    previousValue = value;
}})();