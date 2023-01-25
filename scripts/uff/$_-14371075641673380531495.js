(function(){{
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (!        $that.trace) {
        return;
    }
    if (        $that.logPrefix) {
        args.unshift(        $that.logPrefix);
    }
    if (typeof console !== 'undefined' && console !== null) {
        if (typeof console.log === 'function') {
            console.log.apply(console, args);
        }
    }
    return    $that;
}})();