(function(){{
    'production' !== 'development' ? invariant(typeof callback === 'function', 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(typeof callback === 'function');
    if (internalInstance._pendingCallbacks) {
        internalInstance._pendingCallbacks.push(callback);
    } else {
        internalInstance._pendingCallbacks = [callback];
    }
    enqueueUpdate(internalInstance);
}})();