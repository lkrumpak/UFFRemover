(function(){{
    for (var _len7 = arguments.length, storeNames = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        storeNames[_key7] = arguments[_key7];
    }
    var state = StateFunctions.snapshot(    $that, storeNames);
    fn.assign(    $that._lastSnapshot, state);
    return    $that.serialize(state);
}})();