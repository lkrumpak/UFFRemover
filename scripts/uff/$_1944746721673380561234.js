(function(){{
    var storeNames = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
    var stores = storeNames.length ? storeNames : Object.keys(instance.stores);
    return stores.reduce(function (obj, storeHandle) {
        var storeName = storeHandle.displayName || storeHandle;
        var store = instance.stores[storeName];
        var config = store.StoreModel.config;
        store.lifecycle('snapshot');
        var customSnapshot = config.onSerialize && config.onSerialize(store.state);
        obj[storeName] = customSnapshot ? customSnapshot : store.getState();
        return obj;
    }, {});
}})();