(function(){{
    var args = retUnwrapped ? [1] : arguments, chainAll =         $that.__chain__, value =         $that.__wrapped__, isHybrid = !!        $that.__actions__.length, isLazy = value instanceof LazyWrapper, iteratee = args[0], useLazy = isLazy || isArray(value);
    if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
        // Avoid lazy use if the iteratee has a "length" value other than `1`.
        isLazy = useLazy = false;
    }
    var interceptor = function (value) {
        return retUnwrapped && chainAll ? lodashFunc(value, 1)[0] : lodashFunc.apply(undefined, arrayPush([value], args));
    };
    var action = {
            'func': thru,
            'args': [interceptor],
            'thisArg': undefined
        }, onlyLazy = isLazy && !isHybrid;
    if (retUnwrapped && !chainAll) {
        if (onlyLazy) {
            value = value.clone();
            value.__actions__.push(action);
            return func.call(value);
        }
        return lodashFunc.call(undefined,         $that.value())[0];
    }
    if (!retUnwrapped && useLazy) {
        value = onlyLazy ? value : new LazyWrapper(        $that);
        var result = func.apply(value, args);
        result.__actions__.push(action);
        return new LodashWrapper(result, chainAll);
    }
    return    $that.thru(interceptor);
}})();