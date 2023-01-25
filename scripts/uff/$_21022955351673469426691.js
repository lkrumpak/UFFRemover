(function(){{
    var _this =     $that;
    var loadCounter = 0;
    var asyncMethods = fn.isFunction(asyncDef) ? asyncDef(    $that.alt) : asyncDef;
    var toExport = Object.keys(asyncMethods).reduce(function (publicMethods, methodName) {
        var desc = asyncMethods[methodName];
        var spec = fn.isFunction(desc) ? desc(_this) : desc;
        var validHandlers = [
            'success',
            'error',
            'loading'
        ];
        validHandlers.forEach(function (handler) {
            if (spec[handler] && !spec[handler].id) {
                throw new Error(handler + ' handler must be an action function');
            }
        });
        publicMethods[methodName] = function () {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }
            var state = _this.getInstance().getState();
            var value = spec.local && spec.local.apply(spec, [state].concat(args));
            var shouldFetch = spec.shouldFetch ? spec.shouldFetch.apply(spec, [state].concat(args))    /*eslint-disable*/ : value == null;
            /*eslint-enable*/
            var intercept = spec.interceptResponse || function (x) {
                return x;
            };
            var makeActionHandler = function makeActionHandler(action, isError) {
                return function (x) {
                    var fire = function fire() {
                        loadCounter -= 1;
                        action(intercept(x, action, args));
                        if (isError)
                            throw x;
                    };
                    return _this.alt.trapAsync ? function () {
                        return fire();
                    } : fire();
                };
            };
            // if we don't have it in cache then fetch it
            if (shouldFetch) {
                loadCounter += 1;
                /* istanbul ignore else */
                if (spec.loading)
                    spec.loading(intercept(null, spec.loading, args));
                return spec.remote.apply(spec, [state].concat(args)).then(makeActionHandler(spec.success), makeActionHandler(spec.error, 1));
            }
            // otherwise emit the change now
            _this.emitChange();
            return value;
        };
        return publicMethods;
    }, {});
        $that.exportPublicMethods(toExport);
        $that.exportPublicMethods({
        isLoading: function isLoading() {
            return loadCounter > 0;
        }
    });
}})();