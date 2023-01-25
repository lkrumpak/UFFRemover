(function(){{
    var internalInstance = ReactInstanceMap.get(    $that);
    // TODO: Make sure we run these methods in the correct order, we shouldn't
    // need this check. We're going to assume if we're here it means we ran
    // componentWillUnmount already so there is no internal instance (it gets
    // removed as part of the unmounting process).
    if (!internalInstance) {
        return;
    }
    registerNullComponentID(internalInstance._rootNodeID);
}})();