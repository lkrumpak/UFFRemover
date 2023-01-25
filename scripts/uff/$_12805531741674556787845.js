(function(){{
    n();
    if (a[h.Symbol.iterator])
        return a[h.Symbol.iterator]();
    var b = 0;
    return {
        next: function () {
            return b == a.length ? { done: !0 } : {
                done: !1,
                value: a[b++]
            };
        }
    };
}})();