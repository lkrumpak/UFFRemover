(function(){{
    var chainAll =     $that.__chain__;
    if (chain || chainAll) {
        var result = object(            $that.__wrapped__), actions = result.__actions__ = arrayCopy(            $that.__actions__);
        actions.push({
            'func': func,
            'args': arguments,
            'thisArg': object
        });
        result.__chain__ = chainAll;
        return result;
    }
    return func.apply(object, arrayPush([        $that.value()], arguments));
}})();