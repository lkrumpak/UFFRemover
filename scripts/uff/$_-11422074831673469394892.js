(function(){{
    return !!winnow(    $that, // If this is a positional/relative selector, check membership in the returned set
    // so $("p:first").is("p:last") won't return true for a doc with two "p".
    typeof selector === 'string' && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
}})();