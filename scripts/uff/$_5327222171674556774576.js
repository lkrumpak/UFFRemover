(function(){{
    if (a instanceof vd)
        return a;
    if ('function' == typeof a.cb)
        return a.cb(!1);
    if (ea(a)) {
        var b = 0, c = new vd();
        c.next = function () {
            for (;;) {
                if (b >= a.length)
                    throw ud;
                if (b in a)
                    return a[b++];
                b++;
            }
        };
        return c;
    }
    throw Error('Not implemented');
}})();