(function(){{
    if (Array.isArray(fn)) {
        return _asyncEverySeries(fn, apply, next);
    } else if (typeof fn == 'function') {
        fn.apply(thisArg, (fns.captures || []).concat(next));
    }
}})();