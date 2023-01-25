(function(){{
    var promise = new Promise(window);
    if (Cordova) {
        Cordova.exec(promise.resolver(), promise.rejector(), className, methodName, args);
    } else {
        promise.reject();
    }
    return promise;
}})();