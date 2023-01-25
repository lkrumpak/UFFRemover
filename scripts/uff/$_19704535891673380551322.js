(function(){{
    var index;
    index = transitionManager.active.indexOf(node);
    if (index === -1) {
        return;
    }
    transitionManager.active.splice(index, 1);
    detachNodes();
    if (!transitionManager.active.length && transitionManager._ready) {
        transitionManager.complete();
    }
}})();