(function(){{
    'production' !== 'development' ? invariant(typeof spec === 'object', 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(typeof spec === 'object');
    if (hasOwnProperty.call(spec, COMMAND_SET)) {
        'production' !== 'development' ? invariant(Object.keys(spec).length === 1, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(Object.keys(spec).length === 1);
        return spec[COMMAND_SET];
    }
    var nextValue = shallowCopy(value);
    if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
        var mergeObj = spec[COMMAND_MERGE];
        'production' !== 'development' ? invariant(mergeObj && typeof mergeObj === 'object', 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(mergeObj && typeof mergeObj === 'object');
        'production' !== 'development' ? invariant(nextValue && typeof nextValue === 'object', 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(nextValue && typeof nextValue === 'object');
        assign(nextValue, spec[COMMAND_MERGE]);
    }
    if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
        invariantArrayCase(value, spec, COMMAND_PUSH);
        spec[COMMAND_PUSH].forEach(function (item) {
            nextValue.push(item);
        });
    }
    if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
        invariantArrayCase(value, spec, COMMAND_UNSHIFT);
        spec[COMMAND_UNSHIFT].forEach(function (item) {
            nextValue.unshift(item);
        });
    }
    if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
        'production' !== 'development' ? invariant(Array.isArray(value), 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(Array.isArray(value));
        'production' !== 'development' ? invariant(Array.isArray(spec[COMMAND_SPLICE]), 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(Array.isArray(spec[COMMAND_SPLICE]));
        spec[COMMAND_SPLICE].forEach(function (args) {
            'production' !== 'development' ? invariant(Array.isArray(args), 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(Array.isArray(args));
            nextValue.splice.apply(nextValue, args);
        });
    }
    if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
        'production' !== 'development' ? invariant(typeof spec[COMMAND_APPLY] === 'function', 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(typeof spec[COMMAND_APPLY] === 'function');
        nextValue = spec[COMMAND_APPLY](nextValue);
    }
    for (var k in spec) {
        if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
            nextValue[k] = update(value[k], spec[k]);
        }
    }
    return nextValue;
}})();