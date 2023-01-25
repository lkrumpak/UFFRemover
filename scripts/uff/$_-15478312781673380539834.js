(function(){{
    var newType = typeof newVal;
    // we have to have a way of supporting "missing" objects.
    // Null is an object, but setting a value to undefined
    // should work too, IMO. We just override it, in that case.
    if (newType !== 'object' && _.isUndefined(newVal)) {
        newVal = null;
        newType = 'object';
    }
    return {
        val: newVal,
        type: newType
    };
}})();