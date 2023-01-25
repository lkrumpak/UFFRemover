(function(){{
    var data = {};
    if (!storeInst.displayName) {
        throw new ReferenceError('Store provided does not have a name');
    }
    data[storeInst.displayName] = payload;
    return    $that.serialize(data);
}    // Instance type methods for injecting alt into your application as context
})();