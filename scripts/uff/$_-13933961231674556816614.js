(function(){{
    var notifyKeypathDependants, queueDependants, wrappers, wrapper, i;
    notifyKeypathDependants = function (root, keypath) {
        var depsByKeypath, deps, keys, upstreamQueue, smartUpdateQueue, dumbUpdateQueue, i, changed, start, end, childKeypath, lengthUnchanged;
        if (methodName === 'sort' || methodName === 'reverse') {
            root.set(keypath, array);
            return;
        }
        clearCache(root, keypath);
        smartUpdateQueue = [];
        dumbUpdateQueue = [];
        for (i = 0; i < root._deps.length; i += 1) {
            depsByKeypath = root._deps[i];
            if (!depsByKeypath) {
                continue;
            }
            deps = depsByKeypath[keypath];
            if (deps) {
                queueDependants(keypath, deps, smartUpdateQueue, dumbUpdateQueue);
                preDomUpdate(root);
                while (smartUpdateQueue.length) {
                    smartUpdateQueue.pop().smartUpdate(methodName, args);
                }
                while (dumbUpdateQueue.length) {
                    dumbUpdateQueue.pop().update();
                }
            }
        }
        if (methodName === 'splice' && args.length > 2 && args[1]) {
            changed = Math.min(args[1], args.length - 2);
            start = args[0];
            end = start + changed;
            if (args[1] === args.length - 2) {
                lengthUnchanged = true;
            }
            for (i = start; i < end; i += 1) {
                childKeypath = keypath + '.' + i;
                notifyDependants(root, childKeypath);
            }
        }
        preDomUpdate(root);
        upstreamQueue = [];
        keys = keypath.split('.');
        while (keys.length) {
            keys.pop();
            upstreamQueue[upstreamQueue.length] = keys.join('.');
        }
        notifyDependants.multiple(root, upstreamQueue, true);
        if (!lengthUnchanged) {
            notifyDependants(root, keypath + '.length', true);
        }
    };
    queueDependants = function (keypath, deps, smartUpdateQueue, dumbUpdateQueue) {
        var k, dependant;
        k = deps.length;
        while (k--) {
            dependant = deps[k];
            if (dependant.type === types.REFERENCE) {
                dependant.update();
            } else if (dependant.keypath === keypath && dependant.type === types.SECTION && !dependant.inverted && dependant.docFrag) {
                smartUpdateQueue[smartUpdateQueue.length] = dependant;
            } else {
                dumbUpdateQueue[dumbUpdateQueue.length] = dependant;
            }
        }
    };
    wrappers = array._ractive.wrappers;
    i = wrappers.length;
    while (i--) {
        wrapper = wrappers[i];
        notifyKeypathDependants(wrapper.root, wrapper.keypath);
    }
}})();