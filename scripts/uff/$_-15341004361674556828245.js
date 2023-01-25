(function(){{
    var f = d[a];
    if (f === n)
        throw Error('Couldn\'t find any memo with ID ' + a + '. Perhaps it\'s already been unmemoized.');
    try {
        return f.apply(null, b || []), !0;
    } finally {
        delete d[a];
    }
}})();