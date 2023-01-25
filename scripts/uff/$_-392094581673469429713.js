(function(){{
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');
    if (!internalInstance) {
        return;
    }
    internalInstance._pendingStateQueue = [completeState];
    internalInstance._pendingReplaceState = true;
    enqueueUpdate(internalInstance);
}})();