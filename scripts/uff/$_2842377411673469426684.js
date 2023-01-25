(function(){{
    StateFunctions.setAppState(    $that, data, function (storeInst, state) {
        storeInst.lifecycle('bootstrap', state);
        storeInst.emitChange();
    });
}})();