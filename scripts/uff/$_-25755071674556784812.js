(function(){{
    var matched = jQuery.map(    $that, fn, until);
    if (name.slice(-5) !== 'Until') {
        selector = until;
    }
    if (selector && typeof selector === 'string') {
        matched = jQuery.filter(selector, matched);
    }
    if (        $that.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
            jQuery.unique(matched);
        }
        // Reverse order for parents* and prev-derivatives
        if (rparentsprev.test(name)) {
            matched.reverse();
        }
    }
    return    $that.pushStack(matched);
}})();