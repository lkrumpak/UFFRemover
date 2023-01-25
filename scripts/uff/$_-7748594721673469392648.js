(function(){{
    var isArr = isArray(object) || isTypedArray(object);
    iteratee = getCallback(iteratee, thisArg, 4);
    if (accumulator == null) {
        if (isArr || isObject(object)) {
            var Ctor = object.constructor;
            if (isArr) {
                accumulator = isArray(object) ? new Ctor() : [];
            } else {
                accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
            }
        } else {
            accumulator = {};
        }
    }
    (isArr ? arrayEach : baseForOwn)(object, function (value, index, object) {
        return iteratee(accumulator, value, index, object);
    });
    return accumulator;
}})();