(function(){{
    var i;
    if (ractive._patternObservers.length) {
        notifyPatternObservers(ractive, keypath, keypath, onlyDirect, true);
    }
    for (i = 0; i < ractive._deps.length; i += 1) {
        notifyDependantsAtPriority(ractive, keypath, i, onlyDirect);
    }
}})();