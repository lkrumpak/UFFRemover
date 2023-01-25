(function(){{
    delete    $that.constructor.store[getId(    $that)];
    return can.Map.prototype._bindteardown.apply(    $that, arguments);
}})();