(function(){{
    var map, i;
    map = ractive._depsMap[oldKeypath];
    if (!map) {
        return;
    }
    i = map.length;
    while (i--) {
        gatherDependants(ractive, map[i], toReassign);
    }
}})();