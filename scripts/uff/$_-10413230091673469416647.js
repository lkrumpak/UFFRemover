(function(){{
    var index;
    if (isPatternObserver) {
        index = ractive._patternObservers.indexOf(observer);
        if (index !== -1) {
            ractive._patternObservers.splice(index, 1);
        }
    }
    unregisterDependant(observer);
}})();