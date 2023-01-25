(function(){{
    var prevClass = value ? no : yes;
    var newClass = value ? yes : no;
    getMatches(el, selector).forEach(function (match) {
        prevClass.forEach(function (pc) {
            dom.removeClass(match, pc);
        });
        newClass.forEach(function (nc) {
            dom.addClass(match, nc);
        });
    });
}})();