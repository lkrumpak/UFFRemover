(function(){{
    var length = obj.length;
    // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
    // old versions of Safari).
    'production' !== 'development' ? invariant(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function'), 'toArray: Array-like object expected') : invariant(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function'));
    'production' !== 'development' ? invariant(typeof length === 'number', 'toArray: Object needs a length property') : invariant(typeof length === 'number');
    'production' !== 'development' ? invariant(length === 0 || length - 1 in obj, 'toArray: Object should have keys for indices') : invariant(length === 0 || length - 1 in obj);
    // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
    // without method will throw during the slice call and skip straight to the
    // fallback.
    if (obj.hasOwnProperty) {
        try {
            return Array.prototype.slice.call(obj);
        } catch (e) {
        }
    }
    // Fall back to copying key by key. This assumes all keys have a value,
    // so will not preserve sparsely populated inputs.
    var ret = Array(length);
    for (var ii = 0; ii < length; ii++) {
        ret[ii] = obj[ii];
    }
    return ret;
}})();