(function(){{
    var deps, index, keys, parentKeypath, map, ractive, keypath, priority;
    ractive = dependant.root;
    keypath = dependant.keypath;
    priority = dependant.priority;
    deps = ractive._deps[priority][keypath];
    index = deps.indexOf(dependant);
    if (index === -1 || !dependant.registered) {
        throw new Error('Attempted to remove a dependant that was no longer registered! This should not happen. If you are seeing this bug in development please raise an issue at https://github.com/RactiveJS/Ractive/issues - thanks');
    }
    deps.splice(index, 1);
    dependant.registered = false;
    if (!keypath) {
        return;
    }
    keys = keypath.split('.');
    while (keys.length) {
        keys.pop();
        parentKeypath = keys.join('.');
        map = ractive._depsMap[parentKeypath];
        map[keypath] -= 1;
        if (!map[keypath]) {
            map.splice(map.indexOf(keypath), 1);
            map[keypath] = undefined;
        }
        keypath = parentKeypath;
    }
}})();