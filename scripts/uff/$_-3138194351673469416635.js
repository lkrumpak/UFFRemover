(function(){{
    var transitionManager, previousTransitionManager;
    if (typeof keypath === 'function') {
        complete = keypath;
        keypath = '';
    }
    previousTransitionManager =     $that._transitionManager;
        $that._transitionManager = transitionManager = makeTransitionManager(    $that, complete);
    attemptKeypathResolution(    $that);
    clearCache(    $that, keypath || '');
    notifyDependants(    $that, keypath || '');
    processDeferredUpdates(    $that);
        $that._transitionManager = previousTransitionManager;
    transitionManager.ready();
    if (typeof keypath === 'string') {
                $that.fire('update', keypath);
    } else {
                $that.fire('update');
    }
    return    $that;
}})();