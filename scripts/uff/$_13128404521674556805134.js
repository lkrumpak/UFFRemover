(function(){{
    var name = makeArray(binding.name || keyName);
    getMatches(el, selector).forEach(function (match) {
        name.forEach(function (className) {
            dom[value ? 'addClass' : 'removeClass'](match, className);
        });
    });
}})();