(function(){{
    var i, dependant;
    i = deps.length;
    while (i--) {
        dependant = deps[i];
        if (dependant.type === types.REFERENCE) {
            dependant.update();
        } else if (dependant.keypath === keypath && dependant.type === types.SECTION && !dependant.inverted && dependant.docFrag) {
            mergeQueue[mergeQueue.length] = dependant;
        } else {
            updateQueue[updateQueue.length] = dependant;
        }
    }
}})();