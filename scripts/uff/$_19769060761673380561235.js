(function(){{
    return stores.reduce(function (obj, store) {
        var storeName = store.displayName || store;
        if (!state[storeName]) {
            throw new ReferenceError(storeName + ' is not a valid store');
        }
        obj[storeName] = state[storeName];
        return obj;
    }, {});
}    /***/})();