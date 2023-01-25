(function(){{
    // Allow for deprecating things in the process of starting up.
    if (isUndefined(global.process)) {
        return function () {
            return exports.deprecate(fn, msg).apply(this, arguments);
        };
    }
    if (process.noDeprecation === true) {
        return fn;
    }
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) {
                throw new Error(msg);
            } else if (process.traceDeprecation) {
                console.trace(msg);
            } else {
                console.error(msg);
            }
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
}})();