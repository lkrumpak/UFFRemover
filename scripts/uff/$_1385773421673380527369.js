(function(){{
    var args = arguments;
    if (retUnwrapped && !        $that.__chain__) {
        return func.apply(        $that.value(), args);
    }
    return    $that[chainName](function (value) {
        return func.apply(value, args);
    });
}})();