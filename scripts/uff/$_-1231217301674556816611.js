(function(){{
    var i, candidate;
    i = transitionManager.active.length;
    while (i--) {
        candidate = transitionManager.active[i];
        if (node.contains(candidate)) {
            return false;
        }
    }
    return true;
}})();