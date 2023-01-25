(function(){{
    var valid;
    var expectedType = getType(type);
    if (expectedType === 'String') {
        valid = typeof value === (expectedType = 'string');
    } else if (expectedType === 'Number') {
        valid = typeof value === (expectedType = 'number');
    } else if (expectedType === 'Boolean') {
        valid = typeof value === (expectedType = 'boolean');
    } else if (expectedType === 'Function') {
        valid = typeof value === (expectedType = 'function');
    } else if (expectedType === 'Object') {
        valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
        valid = Array.isArray(value);
    } else {
        valid = value instanceof type;
    }
    return {
        valid: valid,
        expectedType: expectedType
    };
}})();