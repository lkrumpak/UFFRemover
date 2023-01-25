(function(){{
    var key = StoreModel.displayName || '';
    store.createStoreConfig(    $that.config, StoreModel);
    var Store = store.transformStore(    $that.storeTransforms, StoreModel);
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }
    return fn.isFunction(Store) ? store.createStoreFromClass.apply(store, [
                $that,
        Store,
        key
    ].concat(args)) : store.createStoreFromObject(    $that, Store, key);
}})();