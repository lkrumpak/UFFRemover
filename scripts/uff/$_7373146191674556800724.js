(function(){{
    if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
    } else {
        factory.requested = true;
        var cbs = factory.pendingCallbacks = [cb];
        var sync = true;
        var resolve = function (res) {
            if (isObject(res)) {
                res = baseCtor.extend(res);
            }
            // cache resolved
            factory.resolved = res;
            // invoke callbacks only if this is not a synchronous resolve
            // (async resolves are shimmed as synchronous during SSR)
            if (!sync) {
                for (var i = 0, l = cbs.length; i < l; i++) {
                    cbs[i](res);
                }
            }
        };
        var reject = function (reason) {
            'development' !== 'production' && warn('Failed to resolve async component: ' + String(factory) + (reason ? '\nReason: ' + reason : ''));
        };
        var res = factory(resolve, reject);
        // handle promise
        if (res && typeof res.then === 'function' && !factory.resolved) {
            res.then(resolve, reject);
        }
        sync = false;
        // return in case resolved synchronously
        return factory.resolved;
    }
}})();