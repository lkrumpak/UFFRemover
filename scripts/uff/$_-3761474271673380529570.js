(function(){{
    var matched = [], cur = elem[dir];
    while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
        if (cur.nodeType === 1) {
            matched.push(cur);
        }
        cur = cur[dir];
    }
    return matched;
}})();