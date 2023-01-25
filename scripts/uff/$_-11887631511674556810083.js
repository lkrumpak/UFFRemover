(function(){{
    var self =     $that;
    var apply;
    if (        $that.async) {
        apply = function (fn, next) {
            if (Array.isArray(fn)) {
                return _asyncEverySeries(fn, apply, next);
            } else if (typeof fn == 'function') {
                fn.apply(thisArg, (fns.captures || []).concat(next));
            }
        };
        _asyncEverySeries(fns, apply, function () {
            if (callback) {
                callback.apply(thisArg, arguments);
            }
        });
    } else {
        apply = function (fn) {
            if (Array.isArray(fn)) {
                return _every(fn, apply);
            } else if (typeof fn === 'function') {
                return fn.apply(thisArg, fns.captures || []);
            } else if (typeof fn === 'string' && self.resource) {
                self.resource[fn].apply(thisArg, fns.captures || []);
            }
        };
        _every(fns, apply);
    }
}})();