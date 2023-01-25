(function(){{
    if (typeof proxyEventName !== 'string') {
        if (parentInstance.debug) {
            throw new Error(errorMessage);
        } else {
            warn(errorMessage);
            return;
        }
    }
    childInstance.on(eventName, function () {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(proxyEventName);
        parentInstance.fire.apply(parentInstance, args);
    });
}})();