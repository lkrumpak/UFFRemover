(function(){{
    do {
        cur = cur[dir];
    } while (cur && cur.nodeType !== 1);
    return cur;
}})();