(function(){{
    var inst =     $that._instance;
    if (inst.componentWillUnmount) {
        var previouslyUnmounting = ReactLifeCycle.currentlyUnmountingInstance;
        ReactLifeCycle.currentlyUnmountingInstance =         $that;
        try {
            inst.componentWillUnmount();
        } finally {
            ReactLifeCycle.currentlyUnmountingInstance = previouslyUnmounting;
        }
    }
    ReactReconciler.unmountComponent(    $that._renderedComponent);
        $that._renderedComponent = null;
    // Reset pending fields
        $that._pendingStateQueue = null;
        $that._pendingReplaceState = false;
        $that._pendingForceUpdate = false;
        $that._pendingCallbacks = null;
        $that._pendingElement = null;
    // These fields do not really need to be reset since this object is no
    // longer accessible.
        $that._context = null;
        $that._rootNodeID = null;
    // Delete the reference from the instance to this internal representation
    // which allow the internals to be properly cleaned up even if the user
    // leaks a reference to the public instance.
    ReactInstanceMap.remove(inst);    // Some existing components rely on inst.props even after they've been
                                      // destroyed (in event handlers).
                                      // TODO: inst.props = null;
                                      // TODO: inst.state = null;
                                      // TODO: inst.context = null;
}})();