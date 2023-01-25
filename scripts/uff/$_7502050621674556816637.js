(function(){{
    var priority, dependantsByKeypath, dependants, i;
    priority = ractive._deps.length;
    while (priority--) {
        dependantsByKeypath = ractive._deps[priority];
        if (dependantsByKeypath) {
            dependants = dependantsByKeypath[oldKeypath];
            if (dependants) {
                i = dependants.length;
                while (i--) {
                    toReassign.push(dependants[i]);
                }
            }
        }
    }
    cascade(ractive, oldKeypath, toReassign);
}})();