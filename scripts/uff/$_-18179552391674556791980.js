(function(){{
    var elem = elems[0];
    if (not) {
        expr = ':not(' + expr + ')';
    }
    return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
        return elem.nodeType === 1;
    }));
}})();