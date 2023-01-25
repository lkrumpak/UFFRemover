(function(){{
    getMatches(el, selector).forEach(function (match) {
        dom.switchClass(match, previousValue, value);
    });
    previousValue = value;
}})();