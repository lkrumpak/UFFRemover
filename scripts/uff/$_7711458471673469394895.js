(function(){{
    var ret = jQuery.map(    $that, fn, until);
    if (name.slice(-5) !== 'Until') {
        selector = until;
    }
    if (selector && typeof selector === 'string') {
        ret = jQuery.filter(selector, ret);
    }
    if (        $that.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
            ret = jQuery.unique(ret);
        }
        // Reverse order for parents* and prev-derivatives
        if (rparentsprev.test(name)) {
            ret = ret.reverse();
        }
    }
    return    $that.pushStack(ret);
}})();