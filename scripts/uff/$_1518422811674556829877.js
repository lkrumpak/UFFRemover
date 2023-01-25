(function(){{
    // Inlined for performance, see `ReactInstanceHandles.createReactID`.
    var rootID =     $that._rootNodeID + name;
    var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
    child._mountIndex = index;
        $that.createChild(child, mountImage);
}})();