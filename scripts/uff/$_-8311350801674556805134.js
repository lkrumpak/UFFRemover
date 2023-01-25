(function(){{
    getMatches(el, yes).forEach(function (match) {
        dom[value ? 'show' : 'hide'](match);
    });
    getMatches(el, no).forEach(function (match) {
        dom[value ? 'hide' : 'show'](match);
    });
}})();