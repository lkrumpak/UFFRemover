(function(){{
    var storeInstance = undefined;
    var StoreProto = createPrototype({}, alt, key, fn.assign({
        getInstance: function getInstance() {
            return storeInstance;
        },
        setState: function setState(nextState) {
            doSetState(this, storeInstance, nextState);
        }
    }, StoreModel));
    // bind the store listeners
    /* istanbul ignore else */
    if (StoreProto.bindListeners) {
        _StoreMixin2['default'].bindListeners.call(StoreProto, StoreProto.bindListeners);
    }
    /* istanbul ignore else */
    if (StoreProto.observe) {
        _StoreMixin2['default'].bindListeners.call(StoreProto, StoreProto.observe(alt));
    }
    // bind the lifecycle events
    /* istanbul ignore else */
    if (StoreProto.lifecycle) {
        fn.eachObject(function (eventName, event) {
            _StoreMixin2['default'].on.call(StoreProto, eventName, event);
        }, [StoreProto.lifecycle]);
    }
    // create the instance and fn.assign the public methods to the instance
    storeInstance = fn.assign(new _AltStore2['default'](alt, StoreProto, StoreProto.state !== undefined ? StoreProto.state : {}, StoreModel), StoreProto.publicMethods, { displayName: key });
    return storeInstance;
}})();