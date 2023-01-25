(function(){{
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');
    if (!internalInstance) {
        return;
    }
    internalInstance._pendingForceUpdate = true;
    enqueueUpdate(internalInstance);
}})();