(function(){{
    var computedBinding =     $that._computedBindings &&    $that._computedBindings[eventName];
    if (computedBinding) {
        if (computedBinding.count === 1) {
            computedBinding.count = 0;
                        $that[eventName].unbind('change', computedBinding.handler);
            delete computedBinding.handler;
        } else {
            computedBinding.count++;
        }
    }
    return can.unbindAndTeardown.apply(    $that, arguments);
}})();