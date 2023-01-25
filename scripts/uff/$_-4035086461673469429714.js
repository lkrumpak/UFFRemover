(function(){{
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceProps');
    if (!internalInstance) {
        return;
    }
    'production' !== 'development' ? invariant(internalInstance._isTopLevel, 'replaceProps(...): You called `replaceProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(internalInstance._isTopLevel);
    // Merge with the pending element if it exists, otherwise with existing
    // element props.
    var element = internalInstance._pendingElement || internalInstance._currentElement;
    internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(element, props);
    enqueueUpdate(internalInstance);
}})();