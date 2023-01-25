(function(){{
    StateFunctions.setAppState(    $that,     $that.serialize(    $that._lastSnapshot), function (storeInst) {
        storeInst.lifecycle('rollback');
        storeInst.emitChange();
    });
}})();