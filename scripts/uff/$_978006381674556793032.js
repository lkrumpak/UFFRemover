(function(){{
    var value =     $that.__wrapped__;
    var interceptor = function (value) {
        return wrapped && wrapped.__dir__ < 0 ? value : value.reverse();
    };
    if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (            $that.__actions__.length) {
            wrapped = new LazyWrapper(            $that);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
            'func': thru,
            'args': [interceptor],
            'thisArg': undefined
        });
        return new LodashWrapper(wrapped,         $that.__chain__);
    }
    return    $that.thru(interceptor);
}})();