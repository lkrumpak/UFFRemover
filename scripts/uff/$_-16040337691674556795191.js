(function(){{
    // Trim the selector passed to compile
    // to avoid treating leading and trailing
    // spaces as combinators
    var input = [], results = [], matcher = compile(selector.replace(rtrim, '$1'));
    return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
        // Match elements unmatched by `matcher`
        while (i--) {
            if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
            }
        }
    }) : function (elem, context, xml) {
        input[0] = elem;
        matcher(input, null, xml, results);
        // Don't keep the element (issue #299)
        input[0] = null;
        return !results.pop();
    };
}})();