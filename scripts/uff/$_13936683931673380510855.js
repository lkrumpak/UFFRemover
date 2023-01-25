(function(){{
    var cur, i = 0, l =         $that.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== 'string' ? jQuery(selectors, context ||        $that.context) : 0;
    for (; i < l; i++) {
        for (cur =             $that[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : // Don't pass non-elements to Sizzle
                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                matched.push(cur);
                break;
            }
        }
    }
    return    $that.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
}})();