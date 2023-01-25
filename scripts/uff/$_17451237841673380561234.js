(function(){{
    var obj = instance.deserialize(data);
    fn.eachObject(function (key, value) {
        var store = instance.stores[key];
        if (store) {
            (function () {
                var config = store.StoreModel.config;
                var state = store.state;
                if (config.onDeserialize)
                    obj[key] = config.onDeserialize(value) || value;
                if (fn.isPojo(state)) {
                    fn.eachObject(function (k) {
                        return delete state[k];
                    }, [state]);
                    fn.assign(state, obj[key]);
                } else {
                    store.state = obj[key];
                }
                onStore(store, store.state);
            }());
        }
    }, [obj]);
}})();