(function(){{
    var filtered =     $that.__filtered__;
    if (filtered && !index) {
        return new LazyWrapper(        $that);
    }
    n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);
    var result =     $that.clone();
    if (filtered) {
        result.__takeCount__ = nativeMin(result.__takeCount__, n);
    } else {
        result.__views__.push({
            'size': n,
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
        });
    }
    return result;
}})();