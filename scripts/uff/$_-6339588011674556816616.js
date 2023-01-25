(function(){{
    var i, methodName;
    i = mutatorMethods.length;
    while (i--) {
        methodName = mutatorMethods[i];
        defineProperty(array, methodName, {
            value: patchedArrayProto[methodName],
            configurable: true
        });
    }
}})();