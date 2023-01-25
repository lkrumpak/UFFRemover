(function(){{
    if (!thing.keypath) {
        var index = thing.root._pendingResolution.indexOf(thing);
        if (index !== -1) {
            thing.root._pendingResolution.splice(index, 1);
        }
    } else {
        unregisterDependant(thing);
    }
}})();