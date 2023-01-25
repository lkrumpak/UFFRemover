(function(){{
    var toReassign, i, dependant;
    toReassign = [];
    gatherDependants(ractive, oldKeypath, toReassign);
    i = toReassign.length;
    while (i--) {
        dependant = toReassign[i];
        unregisterDependant(dependant);
        dependant.keypath = dependant.keypath.replace(oldKeypath, newKeypath);
        registerDependant(dependant);
        dependant.update();
    }
}})();