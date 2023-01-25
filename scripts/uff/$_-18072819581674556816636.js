(function(){{
    var fn, args;
    str = str.replace(/\$\{([0-9]+)\}/g, '_$1');
    if (cache[str]) {
        return cache[str];
    }
    args = [];
    while (i--) {
        args[i] = '_' + i;
    }
    fn = new Function(args.join(','), 'return(' + str + ')');
    cache[str] = fn;
    return fn;
}})();