(function(){{
    var args, fn = _noop, i, j;
    if (arguments[1] instanceof Array) {
        args = arguments[1];
        fn = arguments[2] || _noop;
    } else {
        args = [].slice.call(arguments, 1);
    }
    for (i = 0, j = args.length; i < j; i++) {
        s = s.split('{' + i + '}').join(fn(args[i] + ''));
    }
    return s;
}})();