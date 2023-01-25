(function(){{
    if (!        $that._instance) {
        var rootID = ReactInstanceHandles.createReactRootID();
        var instance = new ShallowComponentWrapper(element.type);
        instance.construct(element);
        instance.mountComponent(rootID, transaction, context);
                $that._instance = instance;
    } else {
                $that._instance.receiveComponent(element, transaction, context);
    }
}})();