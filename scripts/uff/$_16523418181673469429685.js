(function(){{
    var internalInstance = ReactInstanceMap.get(    $that);
    // TODO: Get rid of this check. See TODO in componentDidMount.
    if (!internalInstance) {
        return;
    }
    deregisterNullComponentID(internalInstance._rootNodeID);
}})();