(function(){{
    for (var _len8 = arguments.length, storeNames = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        storeNames[_key8] = arguments[_key8];
    }
    var initialSnapshot = storeNames.length ? StateFunctions.filterSnapshots(    $that,     $that._initSnapshot, storeNames) :     $that._initSnapshot;
    StateFunctions.setAppState(    $that,     $that.serialize(initialSnapshot), function (storeInst) {
        storeInst.lifecycle('init');
        storeInst.emitChange();
    });
}})();