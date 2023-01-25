(function(){{
    if (!isObject(object)) {
        return object;
    }
    var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)), props = isSrcArr ? undefined : keys(source);
    arrayEach(props || source, function (srcValue, key) {
        if (props) {
            key = srcValue;
            srcValue = source[key];
        }
        if (isObjectLike(srcValue)) {
            stackA || (stackA = []);
            stackB || (stackB = []);
            baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
        } else {
            var value = object[key], result = customizer ? customizer(value, srcValue, key, object, source) : undefined, isCommon = result === undefined;
            if (isCommon) {
                result = srcValue;
            }
            if ((result !== undefined || isSrcArr && !(key in object)) && (isCommon || (result === result ? result !== value : value === value))) {
                object[key] = result;
            }
        }
    });
    return object;
}})();