(function(){{
    var keypath, transitionManager, previousTransitionManager;
        $that.fire('teardown');
    previousTransitionManager =     $that._transitionManager;
        $that._transitionManager = transitionManager = makeTransitionManager(    $that, complete);
        $that.fragment.teardown(true);
    while (        $that._animations[0]) {
                $that._animations[0].stop();
    }
    for (keypath in        $that._cache) {
        clearCache(        $that, keypath);
    }
        $that._transitionManager = previousTransitionManager;
    transitionManager.ready();
}})();