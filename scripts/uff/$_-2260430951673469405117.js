(function(){{
    for (var item in binding.cases) {
        getMatches(el, binding.cases[item]).forEach(function (match) {
            dom[value === item ? 'show' : 'hide'](match);
        });
    }
}})();