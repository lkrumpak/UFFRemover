(function(){{
    var currentArray, oldArray, newArray, identifier, lengthUnchanged, i, newIndices, mergeQueue, updateQueue, depsByKeypath, deps, transitionManager, previousTransitionManager, upstreamQueue, keys;
    currentArray =     $that.get(keypath);
    if (!isArray(currentArray) || !isArray(array)) {
        return        $that.set(keypath, array, options && options.complete);
    }
    lengthUnchanged = currentArray.length === array.length;
    if (options && options.compare) {
        if (options.compare === true) {
            identifier = stringify;
        } else if (typeof options.compare === 'string') {
            identifier = getIdentifier(options.compare);
        } else if (typeof options.compare == 'function') {
            identifier = options.compare;
        } else {
            throw new Error('The `compare` option must be a function, or a string representing an identifying field (or `true` to use JSON.stringify)');
        }
        try {
            oldArray = currentArray.map(identifier);
            newArray = array.map(identifier);
        } catch (err) {
            if (                $that.debug) {
                throw err;
            } else {
                warn('Merge operation: comparison failed. Falling back to identity checking');
            }
            oldArray = currentArray;
            newArray = array;
        }
    } else {
        oldArray = currentArray;
        newArray = array;
    }
    newIndices = mapOldToNewIndex(oldArray, newArray);
    clearCache(    $that, keypath);
    replaceData(    $that, keypath, array);
    if (newIndices.unchanged && lengthUnchanged) {
        return;
    }
    previousTransitionManager =     $that._transitionManager;
        $that._transitionManager = transitionManager = makeTransitionManager(    $that, options && options.complete);
    mergeQueue = [];
    updateQueue = [];
    for (i = 0; i <        $that._deps.length; i += 1) {
        depsByKeypath =         $that._deps[i];
        if (!depsByKeypath) {
            continue;
        }
        deps = depsByKeypath[keypath];
        if (deps) {
            queueDependants(keypath, deps, mergeQueue, updateQueue);
            preDomUpdate(            $that);
            while (mergeQueue.length) {
                mergeQueue.pop().merge(newIndices);
            }
            while (updateQueue.length) {
                updateQueue.pop().update();
            }
        }
    }
    processDeferredUpdates(    $that);
    upstreamQueue = [];
    keys = keypath.split('.');
    while (keys.length) {
        keys.pop();
        upstreamQueue[upstreamQueue.length] = keys.join('.');
    }
    notifyDependants.multiple(    $that, upstreamQueue, true);
    if (oldArray.length !== newArray.length) {
        notifyDependants(        $that, keypath + '.length', true);
    }
        $that._transitionManager = previousTransitionManager;
    transitionManager.ready();
}})();