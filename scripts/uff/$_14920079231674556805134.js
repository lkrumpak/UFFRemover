(function(){{
    var names = makeArray(binding.name);
    getMatches(el, selector).forEach(function (match) {
        names.forEach(function (name) {
            dom.setAttribute(match, name, value);
        });
    });
    previousValue = value;
}})();