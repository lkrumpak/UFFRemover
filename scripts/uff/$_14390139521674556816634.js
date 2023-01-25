(function(){{
    var prop, evaluators, index;
    if (!thisPattern.test(fn.toString())) {
        defineProperty(fn, '_nowrap', { value: true });
        return fn;
    }
    if (!fn['_' + ractive._guid]) {
        defineProperty(fn, '_' + ractive._guid, {
            value: function () {
                var originalCaptured, result, i, evaluator;
                originalCaptured = ractive._captured;
                if (!originalCaptured) {
                    ractive._captured = [];
                }
                result = fn.apply(ractive, arguments);
                if (ractive._captured.length) {
                    i = evaluators.length;
                    while (i--) {
                        evaluator = evaluators[i];
                        evaluator.updateSoftDependencies(ractive._captured);
                    }
                }
                ractive._captured = originalCaptured;
                return result;
            },
            writable: true
        });
        for (prop in fn) {
            if (fn.hasOwnProperty(prop)) {
                fn['_' + ractive._guid][prop] = fn[prop];
            }
        }
        fn['_' + ractive._guid + '_evaluators'] = [];
    }
    evaluators = fn['_' + ractive._guid + '_evaluators'];
    index = evaluators.indexOf(evaluator);
    if (index === -1) {
        evaluators.push(evaluator);
    }
    return fn['_' + ractive._guid];
}})();