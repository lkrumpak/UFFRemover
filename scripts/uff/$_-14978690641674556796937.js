(function(){{
    var key, value;
    if (        $that.hasOwnProperty('cid')) {
        return;
    }
    for (key in        $that) {
        if (!__hasProp.call(            $that, key))
            continue;
        value =         $that[key];
        if (__indexOf.call(            $that.constructor.attributes, key) >= 0) {
            delete            $that[key];
        }
    }
    return    $that;
}})();