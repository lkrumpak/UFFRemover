(function(){{
    var RESOLVING = 1, REJECTING = 2, RESOLVED = 3, REJECTED = 4;
    var self =         $that, state = 0, promiseValue = 0, next = [];
    self['promise'] = {};
    self['resolve'] = function (value) {
        if (!state) {
            promiseValue = value;
            state = RESOLVING;
            fire();
        }
        return this;
    };
    self['reject'] = function (value) {
        if (!state) {
            promiseValue = value;
            state = REJECTING;
            fire();
        }
        return this;
    };
    self.promise['then'] = function (successCallback, failureCallback) {
        var deferred = new Deferred(successCallback, failureCallback);
        if (state === RESOLVED) {
            deferred.resolve(promiseValue);
        } else if (state === REJECTED) {
            deferred.reject(promiseValue);
        } else {
            next.push(deferred);
        }
        return deferred.promise;
    };
    function finish(type) {
        state = type || REJECTED;
        next.map(function (deferred) {
            state === RESOLVED && deferred.resolve(promiseValue) || deferred.reject(promiseValue);
        });
    }
    function thennable(then, successCallback, failureCallback, notThennableCallback) {
        if ((promiseValue != null && type.call(promiseValue) === OBJECT || typeof promiseValue === FUNCTION) && typeof then === FUNCTION) {
            try {
                // count protects against abuse calls from spec checker
                var count = 0;
                then.call(promiseValue, function (value) {
                    if (count++)
                        return;
                    promiseValue = value;
                    successCallback();
                }, function (value) {
                    if (count++)
                        return;
                    promiseValue = value;
                    failureCallback();
                });
            } catch (e) {
                m.deferred.onerror(e);
                promiseValue = e;
                failureCallback();
            }
        } else {
            notThennableCallback();
        }
    }
    function fire() {
        // check if it's a thenable
        var then;
        try {
            then = promiseValue && promiseValue.then;
        } catch (e) {
            m.deferred.onerror(e);
            promiseValue = e;
            state = REJECTING;
            return fire();
        }
        thennable(then, function () {
            state = RESOLVING;
            fire();
        }, function () {
            state = REJECTING;
            fire();
        }, function () {
            try {
                if (state === RESOLVING && typeof successCallback === FUNCTION) {
                    promiseValue = successCallback(promiseValue);
                } else if (state === REJECTING && typeof failureCallback === 'function') {
                    promiseValue = failureCallback(promiseValue);
                    state = RESOLVING;
                }
            } catch (e) {
                m.deferred.onerror(e);
                promiseValue = e;
                return finish();
            }
            if (promiseValue === self) {
                promiseValue = TypeError();
                finish();
            } else {
                thennable(then, function () {
                    finish(RESOLVED);
                }, finish, function () {
                    finish(state === RESOLVING && RESOLVED);
                });
            }
        });
    }
}})();